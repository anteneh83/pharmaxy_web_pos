import { create } from 'zustand';
import type {
  POSState,
  Drug,
  LineItem,
  ConsigneeRow,
  Patient,
  UnitOfMeasure,
  VoucherExtensions,
} from '../types/pos.types';
import { mockDrugs, mockPatients, mockPrescriptions, systemConfig } from '../data/mockData';

const initialConsignees: ConsigneeRow[] = [
  { label: 'Consignee1', value: 'John Smith (P001)', typeLabel: 'Patient', unit: 'Regular Patient', unitOptions: ['Regular Patient', 'Inpatient', 'Outpatient', 'VIP', 'Emergency'], statusColor: '#00d2ff' },
  { label: 'Consignee2', value: 'Dr. Adams', typeLabel: 'Doctor', unit: 'General Practice', unitOptions: ['General Practice', 'Internal Medicine', 'Cardiology', 'Pulmonology', 'Orthopedics'], statusColor: '#00d2ff' },
  { label: 'Consignee3', value: 'BlueCross BlueShield', typeLabel: 'Insurance', unit: 'PPO Plan A', unitOptions: ['PPO Plan A', 'HMO Basic', 'Gold Choice', 'Silver Care'], statusColor: '#00d2ff' },
  { label: 'Consignee4', value: 'Main Pharmacy Branch', typeLabel: 'Dispensing Unit', unit: 'Main Store', unitOptions: ['Main Store', 'Express Counter', 'Night Pharmacy', 'Warehouse'], statusColor: '#00d2ff' },
  { label: 'Consignee5', value: '', typeLabel: 'Referring Dr.', unit: 'Clinic Ref', unitOptions: ['Clinic Ref', 'Hospital Transfer', 'Walk-in', 'Self-Referral'], statusColor: '#00d2ff' },
  { label: 'Consignee6', value: '', typeLabel: 'Caregiver', unit: 'Primary Contact', unitOptions: ['Primary Contact', 'Spouse', 'Parent', 'Guardian'], statusColor: '#00d2ff' },
];

const initialExtensions: VoucherExtensions = {
  lineItemExt1: 'Schedule II - Narcotic Controlled Log #984',
  lineItemExt2: 'Lot #BN-2026-001 (Exp: 2027-06-15)',
  voucherExt1: 'CLM-8894102-BCBS',
  voucherExt2: 'AUTH-99021-PA',
  voucherExt3: 'DEA-AB1234567',
  voucherExt4: 'NPI-1992837465',
  voucherExt5: 'Pharm. Sarah Chen (#RPH-4402)',
  voucherExt6: 'VER-882190-OK',
  voucherExt7: 'Refills Authorized: 3 of 5',
  voucherExt8: '30 Days Supply',
};

interface POSStore extends POSState {
  // Actions
  setHeaderFilter: (field: keyof Pick<POSState, 'currentVoucherNo' | 'voucherDefinition' | 'selectedBranch' | 'dateCriteria' | 'startDate' | 'endDate'>, value: string) => void;
  updateConsignee: (index: number, field: keyof ConsigneeRow, value: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedDrug: (drug: Drug | null) => void;
  setSelectedUOM: (uom: UnitOfMeasure) => void;
  setSelectedCategory: (category: string) => void;
  setArticleDescription: (desc: string) => void;
  setArticleLocation: (location: string) => void;

  // Cart / Line items
  addLineItem: (drugToAdd?: Drug, qty?: number) => void;
  removeLineItem: (id: string) => void;
  updateLineItemQty: (id: string, qty: number) => void;
  clearCart: () => void;
  addAllSuggested: () => void;

  // Right Panel
  setRightPanelField: (field: keyof POSState, value: any) => void;
  setExtension: (field: keyof VoucherExtensions, value: string) => void;

  // Helpers
  selectPatient: (patient: Patient) => void;
  loadPrescriptionByNo: (rxNo: string) => void;
  scanBarcode: (barcode: string) => Drug | null;
  newVoucher: () => void;
  recalculateTotals: () => void;
}

export const usePOSStore = create<POSStore>((set, get) => ({
  // Initial state
  currentVoucherNo: 'V-2026-0009',
  voucherDefinition: 'Sale',
  selectedBranch: 'MAIN',
  dateCriteria: 'Today',
  startDate: new Date().toISOString().split('T')[0],
  endDate: new Date().toISOString().split('T')[0],

  consignees: initialConsignees,

  selectedDrug: null,
  searchQuery: '',
  selectedUOM: 'Tablet',
  articleDescription: '',
  selectedCategory: 'All Categories',
  articleLocation: 'Shelf A1-01',

  lineItems: [
    {
      id: 'item-1',
      drugCode: 'AMOX-250',
      drugName: 'Amoxicillin 250mg Tablet',
      unitPrice: 12.99,
      quantity: 2,
      totalAmount: 25.98,
      taxAmount: 3.90,
      discount: 0,
      batchNumber: 'BN-2026-001',
      expiryDate: '2027-06-15',
      isControlled: false,
      requiresPrescription: true,
    },
    {
      id: 'item-2',
      drugCode: 'PARA-500',
      drugName: 'Paracetamol 500mg Tablet',
      unitPrice: 5.99,
      quantity: 3,
      totalAmount: 17.97,
      taxAmount: 2.70,
      discount: 0,
      batchNumber: 'BN-2026-017',
      expiryDate: '2028-01-15',
      isControlled: false,
      requiresPrescription: false,
    },
  ],

  period: '2026-08 (Aug)',
  remark: 'Prescription Dispense - Outpatient',
  organizationUnit: 'Main Store - Counter 1',
  totalQuantity: 5,
  totalValue: 50.55,
  paymentMethod: 'Cash',
  cartCount: 2,
  serialNumber: 'SN-99842-RX',
  fromStore: 'Downtown Main Pharmacy',
  toStore: 'Outpatient Dispensary Unit 2',
  purpose: 'Prescription Fill',
  voucherNote: 'Patient requested generic substitution. Insurance coverage pre-approved.',
  lineItemNote: 'Take 1 tablet every 8 hours after meals. Complete 10-day course.',
  lineItemNoteEnabled: true,
  term: 'Net 30 Days (Insurance Billed)',
  extensions: initialExtensions,
  fsNo: 'RX-2026-88391',
  mrcNo: 'MRC-90218-P',
  subTotal: 43.95,

  selectedPatient: mockPatients[0],

  // Actions
  setHeaderFilter: (field, value) => set({ [field]: value }),

  updateConsignee: (index, field, value) => {
    const consignees = [...get().consignees];
    consignees[index] = { ...consignees[index], [field]: value };
    set({ consignees });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSelectedDrug: (drug) => {
    if (!drug) {
      set({ selectedDrug: null, articleDescription: '', searchQuery: '' });
      return;
    }
    set({
      selectedDrug: drug,
      searchQuery: `${drug.code} - ${drug.name} (${drug.strength})`,
      selectedUOM: drug.uom,
      selectedCategory: drug.category,
      articleDescription: `${drug.name} ${drug.strength} - ${drug.description} [Stock: ${drug.stockQty} ${drug.uom}s]`,
      articleLocation: `Shelf ${drug.shelfLocation}`,
    });
  },

  setSelectedUOM: (uom) => set({ selectedUOM: uom }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setArticleDescription: (desc) => set({ articleDescription: desc }),
  setArticleLocation: (location) => set({ articleLocation: location }),

  addLineItem: (drugToAdd, qty = 1) => {
    const targetDrug = drugToAdd || get().selectedDrug;
    if (!targetDrug) return;

    const existingItems = get().lineItems;
    const existingIndex = existingItems.findIndex((item) => item.drugCode === targetDrug.code);

    let updatedItems: LineItem[];

    if (existingIndex >= 0) {
      updatedItems = [...existingItems];
      const existing = updatedItems[existingIndex];
      const newQty = existing.quantity + qty;
      const totalAmount = parseFloat((targetDrug.price * newQty).toFixed(2));
      const taxAmount = parseFloat((totalAmount * systemConfig.taxRate).toFixed(2));
      updatedItems[existingIndex] = {
        ...existing,
        quantity: newQty,
        totalAmount,
        taxAmount,
      };
    } else {
      const totalAmount = parseFloat((targetDrug.price * qty).toFixed(2));
      const taxAmount = parseFloat((totalAmount * systemConfig.taxRate).toFixed(2));
      const newItem: LineItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        drugCode: targetDrug.code,
        drugName: `${targetDrug.name} ${targetDrug.strength} ${targetDrug.form}`,
        unitPrice: targetDrug.price,
        quantity: qty,
        totalAmount,
        taxAmount,
        discount: 0,
        batchNumber: targetDrug.batchNumber,
        expiryDate: targetDrug.expiryDate,
        isControlled: targetDrug.isControlled,
        schedule: targetDrug.schedule,
        requiresPrescription: targetDrug.requiresPrescription,
      };
      updatedItems = [...existingItems, newItem];
    }

    set({ lineItems: updatedItems });
    get().recalculateTotals();

    // Auto update extension 1 and 2 if controlled or has expiry
    if (targetDrug.isControlled) {
      get().setExtension('lineItemExt1', `Schedule ${targetDrug.schedule} - Controlled Drug Logged`);
    }
    if (targetDrug.expiryDate) {
      get().setExtension('lineItemExt2', `Exp: ${targetDrug.expiryDate} (Lot #${targetDrug.batchNumber})`);
    }
  },

  removeLineItem: (id) => {
    const updatedItems = get().lineItems.filter((item) => item.id !== id);
    set({ lineItems: updatedItems });
    get().recalculateTotals();
  },

  updateLineItemQty: (id, qty) => {
    if (qty <= 0) {
      get().removeLineItem(id);
      return;
    }
    const updatedItems = get().lineItems.map((item) => {
      if (item.id === id) {
        const totalAmount = parseFloat((item.unitPrice * qty).toFixed(2));
        const taxAmount = parseFloat((totalAmount * systemConfig.taxRate).toFixed(2));
        return { ...item, quantity: qty, totalAmount, taxAmount };
      }
      return item;
    });
    set({ lineItems: updatedItems });
    get().recalculateTotals();
  },

  clearCart: () => {
    set({ lineItems: [] });
    get().recalculateTotals();
  },

  addAllSuggested: () => {
    // Add 3 sample drugs
    const sampleDrugs = mockDrugs.slice(0, 3);
    sampleDrugs.forEach((d) => get().addLineItem(d, 1));
  },

  setRightPanelField: (field, value) => set({ [field]: value }),

  setExtension: (field, value) => {
    set({
      extensions: {
        ...get().extensions,
        [field]: value,
      },
    });
  },

  selectPatient: (patient) => {
    const consignees = [...get().consignees];
    consignees[0] = {
      ...consignees[0],
      value: `${patient.fullName} (${patient.id})`,
      unit: patient.insuranceProvider || 'Self-Pay',
    };
    set({
      selectedPatient: patient,
      consignees,
      mrcNo: patient.medicalRecordNo,
    });
  },

  loadPrescriptionByNo: (rxNo) => {
    const rx = mockPrescriptions.find((p) => p.rxNumber.toLowerCase() === rxNo.toLowerCase());
    if (!rx) return;

    set({ fsNo: rx.rxNumber });
    // find patient
    const patient = mockPatients.find((p) => p.id === rx.patientId);
    if (patient) {
      get().selectPatient(patient);
    }

    // load items into cart
    const newItems: LineItem[] = rx.items.map((item) => {
      const drug = mockDrugs.find((d) => d.code === item.drugCode);
      const price = drug ? drug.price : 15.0;
      const totalAmount = parseFloat((price * item.quantity).toFixed(2));
      const taxAmount = parseFloat((totalAmount * systemConfig.taxRate).toFixed(2));

      return {
        id: `rx-item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        drugCode: item.drugCode,
        drugName: item.drugName,
        unitPrice: price,
        quantity: item.quantity,
        totalAmount,
        taxAmount,
        discount: 0,
        batchNumber: drug ? drug.batchNumber : 'BN-RX-LOADED',
        expiryDate: drug ? drug.expiryDate : '2027-12-31',
        isControlled: drug ? drug.isControlled : false,
        schedule: drug?.schedule,
        requiresPrescription: true,
      };
    });

    set({ lineItems: newItems });
    get().recalculateTotals();
  },

  scanBarcode: (barcode) => {
    const drug = mockDrugs.find((d) => d.barcode === barcode || d.code.toLowerCase() === barcode.toLowerCase());
    if (drug) {
      get().setSelectedDrug(drug);
      get().addLineItem(drug, 1);
      return drug;
    }
    return null;
  },

  newVoucher: () => {
    const nextNo = `V-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    set({
      currentVoucherNo: nextNo,
      lineItems: [],
      selectedDrug: null,
      searchQuery: '',
      articleDescription: '',
    });
    get().recalculateTotals();
  },

  recalculateTotals: () => {
    const lineItems = get().lineItems;
    const totalQuantity = lineItems.reduce((sum, item) => sum + item.quantity, 0);
    const subTotal = parseFloat(lineItems.reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2));
    const taxTotal = parseFloat(lineItems.reduce((sum, item) => sum + item.taxAmount, 0).toFixed(2));
    const totalValue = parseFloat((subTotal + taxTotal).toFixed(2));
    const cartCount = lineItems.length;

    set({
      totalQuantity,
      subTotal,
      totalValue,
      cartCount,
    });
  },
}));
