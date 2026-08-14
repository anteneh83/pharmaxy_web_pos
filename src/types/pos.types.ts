// ============================================================================
// Pharmacy WebPOS - TypeScript Types & Interfaces
// ============================================================================

// --- Drug / Article ---
export interface Drug {
  id: string;
  code: string;
  name: string;
  genericName: string;
  strength: string;
  form: DrugForm;
  category: DrugCategory;
  price: number;
  taxRate: number;
  barcode: string;
  requiresPrescription: boolean;
  isControlled: boolean;
  schedule?: ControlledSchedule;
  manufacturer: string;
  supplier: string;
  uom: UnitOfMeasure;
  stockQty: number;
  reorderLevel: number;
  shelfLocation: string;
  expiryDate: string;
  batchNumber: string;
  description: string;
}

export type DrugForm =
  | 'Tablet'
  | 'Capsule'
  | 'Syrup'
  | 'Injection'
  | 'Cream'
  | 'Ointment'
  | 'Drops'
  | 'Inhaler'
  | 'Suppository'
  | 'Powder'
  | 'Suspension'
  | 'Gel';

export type DrugCategory =
  | 'Antibiotic'
  | 'Analgesic'
  | 'Antihypertensive'
  | 'Antidiabetic'
  | 'Antifungal'
  | 'Antihistamine'
  | 'Antacid'
  | 'Vitamin'
  | 'Controlled'
  | 'OTC'
  | 'Cardiovascular'
  | 'Respiratory'
  | 'Gastrointestinal'
  | 'Dermatological'
  | 'Neurological';

export type ControlledSchedule = 'II' | 'III' | 'IV' | 'V';

export type UnitOfMeasure =
  | 'Tablet'
  | 'Capsule'
  | 'Bottle'
  | 'Box'
  | 'Tube'
  | 'Vial'
  | 'Ampoule'
  | 'Strip'
  | 'Pack'
  | 'Each';

// --- Patient / Consignee ---
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  insuranceProvider?: string;
  insurancePolicyNo?: string;
  allergies: string[];
  medicalRecordNo: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  licenseNo: string;
  phone: string;
  hospital: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  planType: string;
  coveragePercent: number;
  contactPhone: string;
}

// --- Consignee Row ---
export interface ConsigneeRow {
  label: string;
  value: string;
  typeLabel: string;
  unit: string;
  unitOptions: string[];
  statusColor: string;
}

// --- Line Item ---
export interface LineItem {
  id: string;
  drugCode: string;
  drugName: string;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
  taxAmount: number;
  discount: number;
  batchNumber: string;
  expiryDate: string;
  isControlled: boolean;
  schedule?: ControlledSchedule;
  requiresPrescription: boolean;
}

// --- Transaction / Voucher ---
export interface Transaction {
  id: string;
  voucherNo: string;
  date: string;
  patientId: string;
  patientName: string;
  prescriptionNo: string;
  lineItems: LineItem[];
  subTotal: number;
  taxTotal: number;
  discountTotal: number;
  grandTotal: number;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
  branchId: string;
  cashierId: string;
  notes: string;
}

export type PaymentMethod = 'Cash' | 'Credit Card' | 'Debit Card' | 'Insurance' | 'Mobile Payment';
export type TransactionStatus = 'Draft' | 'Completed' | 'Voided' | 'Returned';
export type VoucherDefinition = 'Sale' | 'Return' | 'Transfer' | 'Adjustment';

// --- Branch ---
export interface Branch {
  id: string;
  code: string;
  name: string;
  location: string;
  phone: string;
  isActive: boolean;
}

// --- Prescription ---
export interface Prescription {
  id: string;
  rxNumber: string;
  patientId: string;
  patientName: string;
  doctorName: string;
  date: string;
  status: 'Active' | 'Filled' | 'Expired' | 'Cancelled';
  items: PrescriptionItem[];
}

export interface PrescriptionItem {
  drugCode: string;
  drugName: string;
  dosage: string;
  frequency: string;
  duration: string;
  quantity: number;
}

// --- Right Panel Extensions ---
export interface VoucherExtensions {
  lineItemExt1: string; // Controlled Drug Schedule
  lineItemExt2: string; // Expiry Date
  voucherExt1: string;  // Insurance Claim #
  voucherExt2: string;  // Prior Authorization
  voucherExt3: string;  // DEA Number
  voucherExt4: string;  // NPI Number
  voucherExt5: string;  // Dispensing Pharmacist
  voucherExt6: string;  // Verification Code
  voucherExt7: string;  // Refill Count
  voucherExt8: string;  // Days Supply
}

// --- POS State ---
export interface POSState {
  // Current transaction
  currentVoucherNo: string;
  voucherDefinition: VoucherDefinition;
  selectedBranch: string;
  dateCriteria: string;
  startDate: string;
  endDate: string;

  // Consignees
  consignees: ConsigneeRow[];

  // Article selection
  selectedDrug: Drug | null;
  searchQuery: string;
  selectedUOM: UnitOfMeasure;
  articleDescription: string;
  selectedCategory: string;
  articleLocation: string;

  // Line items
  lineItems: LineItem[];

  // Right panel
  period: string;
  remark: string;
  organizationUnit: string;
  totalQuantity: number;
  totalValue: number;
  paymentMethod: PaymentMethod;
  cartCount: number;
  serialNumber: string;
  fromStore: string;
  toStore: string;
  purpose: string;
  voucherNote: string;
  lineItemNote: string;
  lineItemNoteEnabled: boolean;
  term: string;
  extensions: VoucherExtensions;
  fsNo: string;
  mrcNo: string;
  subTotal: number;

  // Selected patient
  selectedPatient: Patient | null;
}

// --- System Config ---
export interface SystemConfig {
  companyName: string;
  companyAddress: string;
  taxRate: number;
  currencySymbol: string;
  currencyCode: string;
  receiptFooter: string;
  defaultPaymentMethod: PaymentMethod;
  autoPrintReceipt: boolean;
  maxPrescriptionAgeDays: number;
  controlledDrugLimitDays: number;
}

// --- User ---
export interface User {
  id: string;
  username: string;
  role: UserRole;
  fullName: string;
  branchId: string;
}

export type UserRole = 'PHARMACIST' | 'TECHNICIAN' | 'MANAGER' | 'CASHIER';
