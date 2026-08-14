// ============================================================================
// Pharmacy WebPOS - Mock Data
// ============================================================================
import type {
  Drug,
  Patient,
  Doctor,
  InsuranceProvider,
  Branch,
  Prescription,
  SystemConfig,
  User,
  Transaction,
} from '../types/pos.types';

// --- System Configuration ---
export const systemConfig: SystemConfig = {
  companyName: 'City Pharmacy',
  companyAddress: '123 Main Street, City, State 12345',
  taxRate: 0.15,
  currencySymbol: '$',
  currencyCode: 'USD',
  receiptFooter: 'Thank you for choosing City Pharmacy',
  defaultPaymentMethod: 'Cash',
  autoPrintReceipt: true,
  maxPrescriptionAgeDays: 180,
  controlledDrugLimitDays: 30,
};

// --- Users ---
export const mockUsers: User[] = [
  { id: 'U001', username: 'pharmacist', role: 'PHARMACIST', fullName: 'Dr. Sarah Chen', branchId: 'BR001' },
  { id: 'U002', username: 'tech', role: 'TECHNICIAN', fullName: 'Mike Thompson', branchId: 'BR001' },
  { id: 'U003', username: 'manager', role: 'MANAGER', fullName: 'Jessica Williams', branchId: 'BR001' },
  { id: 'U004', username: 'cashier', role: 'CASHIER', fullName: 'David Lee', branchId: 'BR001' },
];

// --- Branches ---
export const mockBranches: Branch[] = [
  { id: 'BR001', code: 'MAIN', name: 'Main Pharmacy', location: 'Downtown', phone: '555-1001', isActive: true },
  { id: 'BR002', code: 'EAST', name: 'Eastside Pharmacy', location: 'East Side', phone: '555-1002', isActive: true },
  { id: 'BR003', code: 'WEST', name: 'Westside Pharmacy', location: 'West Side', phone: '555-1003', isActive: true },
  { id: 'BR004', code: 'NORTH', name: 'Northgate Pharmacy', location: 'North Side', phone: '555-1004', isActive: true },
  { id: 'BR005', code: 'SOUTH', name: 'Southpark Pharmacy', location: 'South Side', phone: '555-1005', isActive: true },
];

// --- Drugs Database (50+ drugs) ---
export const mockDrugs: Drug[] = [
  // Antibiotics
  { id: 'D001', code: 'AMOX-250', name: 'Amoxicillin', genericName: 'Amoxicillin', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 12.99, taxRate: 0.15, barcode: '1234567890123', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 500, reorderLevel: 50, shelfLocation: 'A1-01', expiryDate: '2027-06-15', batchNumber: 'BN-2026-001', description: 'Broad-spectrum antibiotic for bacterial infections' },
  { id: 'D002', code: 'AMOX-500', name: 'Amoxicillin', genericName: 'Amoxicillin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 18.50, taxRate: 0.15, barcode: '1234567890124', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 350, reorderLevel: 40, shelfLocation: 'A1-02', expiryDate: '2027-08-20', batchNumber: 'BN-2026-002', description: 'Broad-spectrum antibiotic for bacterial infections' },
  { id: 'D003', code: 'AZITH-250', name: 'Azithromycin', genericName: 'Azithromycin', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 25.99, taxRate: 0.15, barcode: '1234567890125', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 200, reorderLevel: 30, shelfLocation: 'A1-03', expiryDate: '2027-05-10', batchNumber: 'BN-2026-003', description: 'Macrolide antibiotic for respiratory and skin infections' },
  { id: 'D004', code: 'AZITH-500', name: 'Azithromycin', genericName: 'Azithromycin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 35.50, taxRate: 0.15, barcode: '1234567890126', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 150, reorderLevel: 25, shelfLocation: 'A1-04', expiryDate: '2027-09-30', batchNumber: 'BN-2026-004', description: 'Macrolide antibiotic for respiratory and skin infections' },
  { id: 'D005', code: 'CEPH-250', name: 'Cephalexin', genericName: 'Cephalexin', strength: '250mg', form: 'Capsule', category: 'Antibiotic', price: 15.99, taxRate: 0.15, barcode: '1234567890127', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 400, reorderLevel: 45, shelfLocation: 'A2-01', expiryDate: '2027-04-22', batchNumber: 'BN-2026-005', description: 'First-generation cephalosporin antibiotic' },
  { id: 'D006', code: 'CEPH-500', name: 'Cephalexin', genericName: 'Cephalexin', strength: '500mg', form: 'Capsule', category: 'Antibiotic', price: 22.50, taxRate: 0.15, barcode: '1234567890128', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 280, reorderLevel: 35, shelfLocation: 'A2-02', expiryDate: '2027-07-18', batchNumber: 'BN-2026-006', description: 'First-generation cephalosporin antibiotic' },
  { id: 'D007', code: 'CIPRO-250', name: 'Ciprofloxacin', genericName: 'Ciprofloxacin', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 10.99, taxRate: 0.15, barcode: '1234567890129', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 600, reorderLevel: 60, shelfLocation: 'A2-03', expiryDate: '2027-03-15', batchNumber: 'BN-2026-007', description: 'Fluoroquinolone antibiotic for urinary and respiratory infections' },
  { id: 'D008', code: 'CIPRO-500', name: 'Ciprofloxacin', genericName: 'Ciprofloxacin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 15.50, taxRate: 0.15, barcode: '1234567890130', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 450, reorderLevel: 50, shelfLocation: 'A2-04', expiryDate: '2027-11-20', batchNumber: 'BN-2026-008', description: 'Fluoroquinolone antibiotic for urinary and respiratory infections' },
  { id: 'D009', code: 'DOXY-100', name: 'Doxycycline', genericName: 'Doxycycline', strength: '100mg', form: 'Capsule', category: 'Antibiotic', price: 20.99, taxRate: 0.15, barcode: '1234567890133', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 320, reorderLevel: 40, shelfLocation: 'A3-01', expiryDate: '2027-06-30', batchNumber: 'BN-2026-009', description: 'Tetracycline antibiotic for various infections' },
  { id: 'D010', code: 'DOXY-200', name: 'Doxycycline', genericName: 'Doxycycline', strength: '200mg', form: 'Capsule', category: 'Antibiotic', price: 28.99, taxRate: 0.15, barcode: '1234567890134', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 180, reorderLevel: 25, shelfLocation: 'A3-02', expiryDate: '2027-08-15', batchNumber: 'BN-2026-010', description: 'Tetracycline antibiotic for various infections' },
  { id: 'D011', code: 'LEVO-250', name: 'Levofloxacin', genericName: 'Levofloxacin', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 22.50, taxRate: 0.15, barcode: '1234567890135', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 250, reorderLevel: 30, shelfLocation: 'A3-03', expiryDate: '2027-05-25', batchNumber: 'BN-2026-011', description: 'Fluoroquinolone antibiotic for respiratory infections' },
  { id: 'D012', code: 'LEVO-500', name: 'Levofloxacin', genericName: 'Levofloxacin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 32.50, taxRate: 0.15, barcode: '1234567890136', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 190, reorderLevel: 25, shelfLocation: 'A3-04', expiryDate: '2027-10-12', batchNumber: 'BN-2026-012', description: 'Fluoroquinolone antibiotic for respiratory infections' },
  { id: 'D013', code: 'METRO-250', name: 'Metronidazole', genericName: 'Metronidazole', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 8.99, taxRate: 0.15, barcode: '1234567890137', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 700, reorderLevel: 80, shelfLocation: 'A4-01', expiryDate: '2027-04-10', batchNumber: 'BN-2026-013', description: 'Antibiotic and antiprotozoal medication' },
  { id: 'D014', code: 'METRO-500', name: 'Metronidazole', genericName: 'Metronidazole', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 12.99, taxRate: 0.15, barcode: '1234567890138', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 550, reorderLevel: 65, shelfLocation: 'A4-02', expiryDate: '2027-07-22', batchNumber: 'BN-2026-014', description: 'Antibiotic and antiprotozoal medication' },
  { id: 'D015', code: 'PEN-VK', name: 'Penicillin VK', genericName: 'Penicillin V Potassium', strength: '250mg', form: 'Tablet', category: 'Antibiotic', price: 9.99, taxRate: 0.15, barcode: '1234567890139', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 800, reorderLevel: 100, shelfLocation: 'A4-03', expiryDate: '2027-03-05', batchNumber: 'BN-2026-015', description: 'Narrow-spectrum antibiotic for streptococcal infections' },
  { id: 'D016', code: 'PEN-VK-500', name: 'Penicillin VK', genericName: 'Penicillin V Potassium', strength: '500mg', form: 'Tablet', category: 'Antibiotic', price: 14.99, taxRate: 0.15, barcode: '1234567890140', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 650, reorderLevel: 80, shelfLocation: 'A4-04', expiryDate: '2027-09-18', batchNumber: 'BN-2026-016', description: 'Narrow-spectrum antibiotic for streptococcal infections' },

  // Analgesics / OTC
  { id: 'D017', code: 'PARA-500', name: 'Paracetamol', genericName: 'Acetaminophen', strength: '500mg', form: 'Tablet', category: 'Analgesic', price: 5.99, taxRate: 0.15, barcode: '1234567890141', requiresPrescription: false, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 1200, reorderLevel: 150, shelfLocation: 'B1-01', expiryDate: '2028-01-15', batchNumber: 'BN-2026-017', description: 'Pain reliever and fever reducer' },
  { id: 'D018', code: 'IBU-200', name: 'Ibuprofen', genericName: 'Ibuprofen', strength: '200mg', form: 'Tablet', category: 'Analgesic', price: 6.99, taxRate: 0.15, barcode: '1234567890142', requiresPrescription: false, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 900, reorderLevel: 120, shelfLocation: 'B1-02', expiryDate: '2028-03-20', batchNumber: 'BN-2026-018', description: 'NSAID for pain, inflammation, and fever' },
  { id: 'D019', code: 'IBU-400', name: 'Ibuprofen', genericName: 'Ibuprofen', strength: '400mg', form: 'Tablet', category: 'Analgesic', price: 9.99, taxRate: 0.15, barcode: '1234567890143', requiresPrescription: false, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 750, reorderLevel: 100, shelfLocation: 'B1-03', expiryDate: '2028-02-10', batchNumber: 'BN-2026-019', description: 'NSAID for pain, inflammation, and fever' },
  { id: 'D020', code: 'ASP-325', name: 'Aspirin', genericName: 'Acetylsalicylic Acid', strength: '325mg', form: 'Tablet', category: 'Analgesic', price: 4.99, taxRate: 0.15, barcode: '1234567890144', requiresPrescription: false, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 1000, reorderLevel: 120, shelfLocation: 'B1-04', expiryDate: '2028-06-30', batchNumber: 'BN-2026-020', description: 'Pain reliever and anti-inflammatory' },

  // Cardiovascular
  { id: 'D021', code: 'AMLO-5', name: 'Amlodipine', genericName: 'Amlodipine Besylate', strength: '5mg', form: 'Tablet', category: 'Cardiovascular', price: 14.99, taxRate: 0.15, barcode: '1234567890145', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 300, reorderLevel: 40, shelfLocation: 'C1-01', expiryDate: '2027-12-15', batchNumber: 'BN-2026-021', description: 'Calcium channel blocker for hypertension' },
  { id: 'D022', code: 'AMLO-10', name: 'Amlodipine', genericName: 'Amlodipine Besylate', strength: '10mg', form: 'Tablet', category: 'Cardiovascular', price: 19.99, taxRate: 0.15, barcode: '1234567890146', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 220, reorderLevel: 30, shelfLocation: 'C1-02', expiryDate: '2027-11-20', batchNumber: 'BN-2026-022', description: 'Calcium channel blocker for hypertension' },
  { id: 'D023', code: 'ATEN-50', name: 'Atenolol', genericName: 'Atenolol', strength: '50mg', form: 'Tablet', category: 'Cardiovascular', price: 11.99, taxRate: 0.15, barcode: '1234567890147', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 380, reorderLevel: 45, shelfLocation: 'C1-03', expiryDate: '2027-08-10', batchNumber: 'BN-2026-023', description: 'Beta-blocker for hypertension and angina' },
  { id: 'D024', code: 'LOSI-50', name: 'Losartan', genericName: 'Losartan Potassium', strength: '50mg', form: 'Tablet', category: 'Cardiovascular', price: 16.99, taxRate: 0.15, barcode: '1234567890148', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 260, reorderLevel: 35, shelfLocation: 'C2-01', expiryDate: '2027-10-05', batchNumber: 'BN-2026-024', description: 'ARB for hypertension and kidney protection' },

  // Antidiabetic
  { id: 'D025', code: 'METF-500', name: 'Metformin', genericName: 'Metformin HCl', strength: '500mg', form: 'Tablet', category: 'Antidiabetic', price: 8.99, taxRate: 0.15, barcode: '1234567890149', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 520, reorderLevel: 60, shelfLocation: 'C3-01', expiryDate: '2027-07-25', batchNumber: 'BN-2026-025', description: 'Biguanide antidiabetic for type 2 diabetes' },
  { id: 'D026', code: 'METF-850', name: 'Metformin', genericName: 'Metformin HCl', strength: '850mg', form: 'Tablet', category: 'Antidiabetic', price: 12.99, taxRate: 0.15, barcode: '1234567890150', requiresPrescription: true, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 340, reorderLevel: 45, shelfLocation: 'C3-02', expiryDate: '2027-09-12', batchNumber: 'BN-2026-026', description: 'Biguanide antidiabetic for type 2 diabetes' },
  { id: 'D027', code: 'GLIB-5', name: 'Glibenclamide', genericName: 'Glyburide', strength: '5mg', form: 'Tablet', category: 'Antidiabetic', price: 7.99, taxRate: 0.15, barcode: '1234567890151', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 400, reorderLevel: 50, shelfLocation: 'C3-03', expiryDate: '2027-06-18', batchNumber: 'BN-2026-027', description: 'Sulfonylurea for type 2 diabetes' },

  // Gastrointestinal
  { id: 'D028', code: 'OMEP-20', name: 'Omeprazole', genericName: 'Omeprazole', strength: '20mg', form: 'Capsule', category: 'Gastrointestinal', price: 13.99, taxRate: 0.15, barcode: '1234567890152', requiresPrescription: false, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 450, reorderLevel: 55, shelfLocation: 'D1-01', expiryDate: '2027-11-30', batchNumber: 'BN-2026-028', description: 'Proton pump inhibitor for acid reflux' },
  { id: 'D029', code: 'RANI-150', name: 'Ranitidine', genericName: 'Ranitidine HCl', strength: '150mg', form: 'Tablet', category: 'Gastrointestinal', price: 9.99, taxRate: 0.15, barcode: '1234567890153', requiresPrescription: false, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 380, reorderLevel: 45, shelfLocation: 'D1-02', expiryDate: '2027-08-22', batchNumber: 'BN-2026-029', description: 'H2 blocker for acid reduction' },

  // Respiratory
  { id: 'D030', code: 'SALB-INH', name: 'Salbutamol Inhaler', genericName: 'Albuterol', strength: '100mcg', form: 'Inhaler', category: 'Respiratory', price: 28.99, taxRate: 0.15, barcode: '1234567890154', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Each', stockQty: 120, reorderLevel: 20, shelfLocation: 'D2-01', expiryDate: '2027-10-15', batchNumber: 'BN-2026-030', description: 'Bronchodilator inhaler for asthma' },
  { id: 'D031', code: 'CETIR-10', name: 'Cetirizine', genericName: 'Cetirizine HCl', strength: '10mg', form: 'Tablet', category: 'Antihistamine', price: 7.99, taxRate: 0.15, barcode: '1234567890155', requiresPrescription: false, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 600, reorderLevel: 70, shelfLocation: 'D2-02', expiryDate: '2028-01-20', batchNumber: 'BN-2026-031', description: 'Antihistamine for allergies' },
  { id: 'D032', code: 'LORAT-10', name: 'Loratadine', genericName: 'Loratadine', strength: '10mg', form: 'Tablet', category: 'Antihistamine', price: 8.99, taxRate: 0.15, barcode: '1234567890156', requiresPrescription: false, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 550, reorderLevel: 65, shelfLocation: 'D2-03', expiryDate: '2028-02-28', batchNumber: 'BN-2026-032', description: 'Non-drowsy antihistamine for allergies' },

  // Dermatological
  { id: 'D033', code: 'HYDRO-CRM', name: 'Hydrocortisone Cream', genericName: 'Hydrocortisone', strength: '1%', form: 'Cream', category: 'Dermatological', price: 11.99, taxRate: 0.15, barcode: '1234567890157', requiresPrescription: false, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'PharmaDist', uom: 'Tube', stockQty: 200, reorderLevel: 25, shelfLocation: 'E1-01', expiryDate: '2027-12-10', batchNumber: 'BN-2026-033', description: 'Topical corticosteroid for skin irritation' },
  { id: 'D034', code: 'CLOT-CRM', name: 'Clotrimazole Cream', genericName: 'Clotrimazole', strength: '1%', form: 'Cream', category: 'Antifungal', price: 9.99, taxRate: 0.15, barcode: '1234567890158', requiresPrescription: false, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'MedSupply Inc', uom: 'Tube', stockQty: 180, reorderLevel: 20, shelfLocation: 'E1-02', expiryDate: '2027-09-05', batchNumber: 'BN-2026-034', description: 'Antifungal cream for skin infections' },

  // Vitamins
  { id: 'D035', code: 'VITC-500', name: 'Vitamin C', genericName: 'Ascorbic Acid', strength: '500mg', form: 'Tablet', category: 'Vitamin', price: 6.99, taxRate: 0.15, barcode: '1234567890159', requiresPrescription: false, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 800, reorderLevel: 100, shelfLocation: 'F1-01', expiryDate: '2028-05-15', batchNumber: 'BN-2026-035', description: 'Vitamin C supplement for immune support' },
  { id: 'D036', code: 'VITD-1000', name: 'Vitamin D3', genericName: 'Cholecalciferol', strength: '1000IU', form: 'Capsule', category: 'Vitamin', price: 8.99, taxRate: 0.15, barcode: '1234567890160', requiresPrescription: false, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Capsule', stockQty: 650, reorderLevel: 80, shelfLocation: 'F1-02', expiryDate: '2028-04-20', batchNumber: 'BN-2026-036', description: 'Vitamin D supplement for bone health' },
  { id: 'D037', code: 'MULTI-VIT', name: 'Multivitamin', genericName: 'Multivitamin Complex', strength: 'Standard', form: 'Tablet', category: 'Vitamin', price: 12.99, taxRate: 0.15, barcode: '1234567890161', requiresPrescription: false, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Tablet', stockQty: 500, reorderLevel: 60, shelfLocation: 'F1-03', expiryDate: '2028-03-10', batchNumber: 'BN-2026-037', description: 'Daily multivitamin supplement' },

  // Controlled Drugs (Schedule II-IV)
  { id: 'D038', code: 'OXY-5', name: 'Oxycodone', genericName: 'Oxycodone HCl', strength: '5mg', form: 'Tablet', category: 'Controlled', price: 45.99, taxRate: 0.15, barcode: '1234567890131', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 50, reorderLevel: 10, shelfLocation: 'VAULT-01', expiryDate: '2027-06-01', batchNumber: 'BN-CTRL-001', description: 'Opioid analgesic for severe pain' },
  { id: 'D039', code: 'OXY-10', name: 'Oxycodone', genericName: 'Oxycodone HCl', strength: '10mg', form: 'Tablet', category: 'Controlled', price: 65.99, taxRate: 0.15, barcode: '1234567890132', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 30, reorderLevel: 8, shelfLocation: 'VAULT-02', expiryDate: '2027-07-15', batchNumber: 'BN-CTRL-002', description: 'Opioid analgesic for severe pain' },
  { id: 'D040', code: 'MOR-15', name: 'Morphine', genericName: 'Morphine Sulfate', strength: '15mg', form: 'Tablet', category: 'Controlled', price: 55.99, taxRate: 0.15, barcode: '1234567890162', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'GenMed Labs', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 25, reorderLevel: 5, shelfLocation: 'VAULT-03', expiryDate: '2027-05-20', batchNumber: 'BN-CTRL-003', description: 'Opioid analgesic for severe pain' },
  { id: 'D041', code: 'MOR-30', name: 'Morphine', genericName: 'Morphine Sulfate', strength: '30mg', form: 'Tablet', category: 'Controlled', price: 75.99, taxRate: 0.15, barcode: '1234567890163', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'GenMed Labs', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 15, reorderLevel: 5, shelfLocation: 'VAULT-04', expiryDate: '2027-08-10', batchNumber: 'BN-CTRL-004', description: 'Opioid analgesic for severe pain' },
  { id: 'D042', code: 'HYDRO-5', name: 'Hydrocodone', genericName: 'Hydrocodone Bitartrate', strength: '5mg', form: 'Tablet', category: 'Controlled', price: 35.99, taxRate: 0.15, barcode: '1234567890164', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'BioPharm Co', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 40, reorderLevel: 10, shelfLocation: 'VAULT-05', expiryDate: '2027-09-25', batchNumber: 'BN-CTRL-005', description: 'Opioid analgesic for moderate to severe pain' },
  { id: 'D043', code: 'HYDRO-10', name: 'Hydrocodone', genericName: 'Hydrocodone Bitartrate', strength: '10mg', form: 'Tablet', category: 'Controlled', price: 52.99, taxRate: 0.15, barcode: '1234567890165', requiresPrescription: true, isControlled: true, schedule: 'II', manufacturer: 'BioPharm Co', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 20, reorderLevel: 5, shelfLocation: 'VAULT-06', expiryDate: '2027-11-10', batchNumber: 'BN-CTRL-006', description: 'Opioid analgesic for moderate to severe pain' },
  { id: 'D044', code: 'COD-30', name: 'Codeine', genericName: 'Codeine Phosphate', strength: '30mg', form: 'Tablet', category: 'Controlled', price: 25.99, taxRate: 0.15, barcode: '1234567890166', requiresPrescription: true, isControlled: true, schedule: 'III', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 60, reorderLevel: 15, shelfLocation: 'VAULT-07', expiryDate: '2027-07-30', batchNumber: 'BN-CTRL-007', description: 'Opioid analgesic for mild to moderate pain' },
  { id: 'D045', code: 'COD-60', name: 'Codeine', genericName: 'Codeine Phosphate', strength: '60mg', form: 'Tablet', category: 'Controlled', price: 35.99, taxRate: 0.15, barcode: '1234567890167', requiresPrescription: true, isControlled: true, schedule: 'III', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 35, reorderLevel: 10, shelfLocation: 'VAULT-08', expiryDate: '2027-06-20', batchNumber: 'BN-CTRL-008', description: 'Opioid analgesic for mild to moderate pain' },
  { id: 'D046', code: 'ALPRA-0.5', name: 'Alprazolam', genericName: 'Alprazolam', strength: '0.5mg', form: 'Tablet', category: 'Controlled', price: 15.99, taxRate: 0.15, barcode: '1234567890168', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'GenMed Labs', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 80, reorderLevel: 15, shelfLocation: 'VAULT-09', expiryDate: '2027-10-15', batchNumber: 'BN-CTRL-009', description: 'Benzodiazepine for anxiety disorders' },
  { id: 'D047', code: 'ALPRA-1', name: 'Alprazolam', genericName: 'Alprazolam', strength: '1mg', form: 'Tablet', category: 'Controlled', price: 22.99, taxRate: 0.15, barcode: '1234567890169', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'GenMed Labs', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 45, reorderLevel: 10, shelfLocation: 'VAULT-10', expiryDate: '2027-12-01', batchNumber: 'BN-CTRL-010', description: 'Benzodiazepine for anxiety disorders' },
  { id: 'D048', code: 'DIAZ-2', name: 'Diazepam', genericName: 'Diazepam', strength: '2mg', form: 'Tablet', category: 'Controlled', price: 12.99, taxRate: 0.15, barcode: '1234567890170', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'BioPharm Co', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 70, reorderLevel: 15, shelfLocation: 'VAULT-11', expiryDate: '2027-09-08', batchNumber: 'BN-CTRL-011', description: 'Benzodiazepine for anxiety, seizures, and muscle spasms' },
  { id: 'D049', code: 'DIAZ-5', name: 'Diazepam', genericName: 'Diazepam', strength: '5mg', form: 'Tablet', category: 'Controlled', price: 18.99, taxRate: 0.15, barcode: '1234567890171', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'BioPharm Co', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 50, reorderLevel: 10, shelfLocation: 'VAULT-12', expiryDate: '2027-11-22', batchNumber: 'BN-CTRL-012', description: 'Benzodiazepine for anxiety, seizures, and muscle spasms' },
  { id: 'D050', code: 'ZOLP-5', name: 'Zolpidem', genericName: 'Zolpidem Tartrate', strength: '5mg', form: 'Tablet', category: 'Controlled', price: 15.99, taxRate: 0.15, barcode: '1234567890172', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 55, reorderLevel: 12, shelfLocation: 'VAULT-13', expiryDate: '2027-08-28', batchNumber: 'BN-CTRL-013', description: 'Sedative-hypnotic for insomnia' },
  { id: 'D051', code: 'ZOLP-10', name: 'Zolpidem', genericName: 'Zolpidem Tartrate', strength: '10mg', form: 'Tablet', category: 'Controlled', price: 22.99, taxRate: 0.15, barcode: '1234567890173', requiresPrescription: true, isControlled: true, schedule: 'IV', manufacturer: 'PharmaCorp', supplier: 'ControlledSupply', uom: 'Tablet', stockQty: 40, reorderLevel: 8, shelfLocation: 'VAULT-14', expiryDate: '2027-10-30', batchNumber: 'BN-CTRL-014', description: 'Sedative-hypnotic for insomnia' },

  // Additional common drugs
  { id: 'D052', code: 'PRED-5', name: 'Prednisolone', genericName: 'Prednisolone', strength: '5mg', form: 'Tablet', category: 'Respiratory', price: 10.99, taxRate: 0.15, barcode: '1234567890174', requiresPrescription: true, isControlled: false, manufacturer: 'GenMed Labs', supplier: 'MedSupply Inc', uom: 'Tablet', stockQty: 300, reorderLevel: 35, shelfLocation: 'D3-01', expiryDate: '2027-07-12', batchNumber: 'BN-2026-038', description: 'Corticosteroid for inflammation and allergies' },
  { id: 'D053', code: 'FLUCON-150', name: 'Fluconazole', genericName: 'Fluconazole', strength: '150mg', form: 'Capsule', category: 'Antifungal', price: 18.99, taxRate: 0.15, barcode: '1234567890175', requiresPrescription: true, isControlled: false, manufacturer: 'BioPharm Co', supplier: 'PharmaDist', uom: 'Capsule', stockQty: 150, reorderLevel: 20, shelfLocation: 'E2-01', expiryDate: '2027-08-05', batchNumber: 'BN-2026-039', description: 'Antifungal for yeast and fungal infections' },
  { id: 'D054', code: 'ANTAC-SUS', name: 'Antacid Suspension', genericName: 'Aluminum/Magnesium Hydroxide', strength: '200ml', form: 'Suspension', category: 'Gastrointestinal', price: 7.99, taxRate: 0.15, barcode: '1234567890176', requiresPrescription: false, isControlled: false, manufacturer: 'PharmaCorp', supplier: 'MedSupply Inc', uom: 'Bottle', stockQty: 250, reorderLevel: 30, shelfLocation: 'D1-03', expiryDate: '2027-11-18', batchNumber: 'BN-2026-040', description: 'Antacid suspension for heartburn and indigestion' },
];

// --- Patients ---
export const mockPatients: Patient[] = [
  { id: 'P001', firstName: 'John', lastName: 'Smith', fullName: 'John Smith', phone: '555-0101', email: 'john.smith@email.com', dateOfBirth: '1975-06-15', gender: 'Male', address: '123 Oak Street, Downtown', insuranceProvider: 'BlueCross', insurancePolicyNo: 'BC-123456', allergies: ['Penicillin'], medicalRecordNo: 'MRC-001' },
  { id: 'P002', firstName: 'Mary', lastName: 'Johnson', fullName: 'Mary Johnson', phone: '555-0102', email: 'mary.j@email.com', dateOfBirth: '1982-08-22', gender: 'Female', address: '456 Elm Avenue, East Side', insuranceProvider: 'Aetna', insurancePolicyNo: 'AE-789012', allergies: ['Sulfa'], medicalRecordNo: 'MRC-002' },
  { id: 'P003', firstName: 'Robert', lastName: 'Wilson', fullName: 'Robert Wilson', phone: '555-0103', email: 'r.wilson@email.com', dateOfBirth: '1990-02-10', gender: 'Male', address: '789 Pine Road, West Side', insuranceProvider: 'UnitedHealth', insurancePolicyNo: 'UH-345678', allergies: [], medicalRecordNo: 'MRC-003' },
  { id: 'P004', firstName: 'Patricia', lastName: 'Davis', fullName: 'Patricia Davis', phone: '555-0104', email: 'p.davis@email.com', dateOfBirth: '1978-11-03', gender: 'Female', address: '101 Maple Drive, North Side', insuranceProvider: 'Cigna', insurancePolicyNo: 'CG-901234', allergies: ['Aspirin', 'Codeine'], medicalRecordNo: 'MRC-004' },
  { id: 'P005', firstName: 'James', lastName: 'Brown', fullName: 'James Brown', phone: '555-0105', email: 'j.brown@email.com', dateOfBirth: '1965-05-20', gender: 'Male', address: '202 Cedar Lane, South Side', insuranceProvider: 'BlueCross', insurancePolicyNo: 'BC-567890', allergies: ['Ibuprofen'], medicalRecordNo: 'MRC-005' },
  { id: 'P006', firstName: 'Linda', lastName: 'Martinez', fullName: 'Linda Martinez', phone: '555-0106', email: 'l.martinez@email.com', dateOfBirth: '1988-09-12', gender: 'Female', address: '303 Birch Court, Downtown', insuranceProvider: 'Aetna', insurancePolicyNo: 'AE-123789', allergies: [], medicalRecordNo: 'MRC-006' },
  { id: 'P007', firstName: 'Michael', lastName: 'Garcia', fullName: 'Michael Garcia', phone: '555-0107', email: 'm.garcia@email.com', dateOfBirth: '1992-03-28', gender: 'Male', address: '404 Walnut Street, East Side', insuranceProvider: 'UnitedHealth', insurancePolicyNo: 'UH-456123', allergies: ['Latex'], medicalRecordNo: 'MRC-007' },
  { id: 'P008', firstName: 'Barbara', lastName: 'Clark', fullName: 'Barbara Clark', phone: '555-0108', email: 'b.clark@email.com', dateOfBirth: '1970-07-15', gender: 'Female', address: '505 Spruce Way, West Side', insuranceProvider: 'Cigna', insurancePolicyNo: 'CG-789456', allergies: ['Amoxicillin'], medicalRecordNo: 'MRC-008' },
  { id: 'P009', firstName: 'William', lastName: 'Lewis', fullName: 'William Lewis', phone: '555-0109', email: 'w.lewis@email.com', dateOfBirth: '1985-12-01', gender: 'Male', address: '606 Ash Boulevard, North Side', allergies: [], medicalRecordNo: 'MRC-009' },
  { id: 'P010', firstName: 'Susan', lastName: 'Walker', fullName: 'Susan Walker', phone: '555-0110', email: 's.walker@email.com', dateOfBirth: '1995-04-18', gender: 'Female', address: '707 Hickory Place, South Side', insuranceProvider: 'BlueCross', insurancePolicyNo: 'BC-234567', allergies: ['Morphine'], medicalRecordNo: 'MRC-010' },
  { id: 'P011', firstName: 'David', lastName: 'Hall', fullName: 'David Hall', phone: '555-0111', email: 'd.hall@email.com', dateOfBirth: '1980-01-25', gender: 'Male', address: '808 Cherry Drive, Downtown', insuranceProvider: 'Aetna', insurancePolicyNo: 'AE-345012', allergies: [], medicalRecordNo: 'MRC-011' },
  { id: 'P012', firstName: 'Jennifer', lastName: 'Allen', fullName: 'Jennifer Allen', phone: '555-0112', email: 'j.allen@email.com', dateOfBirth: '1993-07-08', gender: 'Female', address: '909 Poplar Road, East Side', insuranceProvider: 'UnitedHealth', insurancePolicyNo: 'UH-678345', allergies: ['Erythromycin'], medicalRecordNo: 'MRC-012' },
  { id: 'P013', firstName: 'Richard', lastName: 'Young', fullName: 'Richard Young', phone: '555-0113', email: 'r.young@email.com', dateOfBirth: '1972-10-14', gender: 'Male', address: '111 Willow Lane, West Side', allergies: ['Tetracycline'], medicalRecordNo: 'MRC-013' },
  { id: 'P014', firstName: 'Maria', lastName: 'King', fullName: 'Maria King', phone: '555-0114', email: 'm.king@email.com', dateOfBirth: '1987-05-30', gender: 'Female', address: '222 Dogwood Court, North Side', insuranceProvider: 'Cigna', insurancePolicyNo: 'CG-012789', allergies: [], medicalRecordNo: 'MRC-014' },
  { id: 'P015', firstName: 'Charles', lastName: 'Wright', fullName: 'Charles Wright', phone: '555-0115', email: 'c.wright@email.com', dateOfBirth: '1968-08-20', gender: 'Male', address: '333 Sycamore Avenue, South Side', insuranceProvider: 'BlueCross', insurancePolicyNo: 'BC-890123', allergies: ['NSAIDs'], medicalRecordNo: 'MRC-015' },
  { id: 'P016', firstName: 'Elizabeth', lastName: 'Lopez', fullName: 'Elizabeth Lopez', phone: '555-0116', email: 'e.lopez@email.com', dateOfBirth: '1991-12-05', gender: 'Female', address: '444 Magnolia Blvd, Downtown', allergies: [], medicalRecordNo: 'MRC-016' },
  { id: 'P017', firstName: 'Thomas', lastName: 'Hill', fullName: 'Thomas Hill', phone: '555-0117', email: 't.hill@email.com', dateOfBirth: '1976-03-17', gender: 'Male', address: '555 Juniper Way, East Side', insuranceProvider: 'Aetna', insurancePolicyNo: 'AE-567234', allergies: ['Ciprofloxacin'], medicalRecordNo: 'MRC-017' },
  { id: 'P018', firstName: 'Nancy', lastName: 'Scott', fullName: 'Nancy Scott', phone: '555-0118', email: 'n.scott@email.com', dateOfBirth: '1983-09-22', gender: 'Female', address: '666 Redwood Street, West Side', insuranceProvider: 'UnitedHealth', insurancePolicyNo: 'UH-890567', allergies: [], medicalRecordNo: 'MRC-018' },
  { id: 'P019', firstName: 'Daniel', lastName: 'Green', fullName: 'Daniel Green', phone: '555-0119', email: 'd.green@email.com', dateOfBirth: '1998-06-11', gender: 'Male', address: '777 Palm Drive, North Side', allergies: ['Metronidazole'], medicalRecordNo: 'MRC-019' },
  { id: 'P020', firstName: 'Karen', lastName: 'Adams', fullName: 'Karen Adams', phone: '555-0120', email: 'k.adams@email.com', dateOfBirth: '1974-11-28', gender: 'Female', address: '888 Cypress Lane, South Side', insuranceProvider: 'Cigna', insurancePolicyNo: 'CG-234890', allergies: ['Doxycycline'], medicalRecordNo: 'MRC-020' },
];

// --- Doctors ---
export const mockDoctors: Doctor[] = [
  { id: 'DR001', name: 'Dr. Adams', specialty: 'General Practice', licenseNo: 'MD-100001', phone: '555-2001', hospital: 'City General Hospital' },
  { id: 'DR002', name: 'Dr. Baker', specialty: 'Internal Medicine', licenseNo: 'MD-100002', phone: '555-2002', hospital: 'City General Hospital' },
  { id: 'DR003', name: 'Dr. Clark', specialty: 'Cardiology', licenseNo: 'MD-100003', phone: '555-2003', hospital: 'Heart Care Center' },
  { id: 'DR004', name: 'Dr. Davis', specialty: 'Pulmonology', licenseNo: 'MD-100004', phone: '555-2004', hospital: 'Respiratory Clinic' },
  { id: 'DR005', name: 'Dr. Evans', specialty: 'Orthopedics', licenseNo: 'MD-100005', phone: '555-2005', hospital: 'Bone & Joint Institute' },
  { id: 'DR006', name: 'Dr. Foster', specialty: 'Dermatology', licenseNo: 'MD-100006', phone: '555-2006', hospital: 'Skin Health Clinic' },
  { id: 'DR007', name: 'Dr. Green', specialty: 'Endocrinology', licenseNo: 'MD-100007', phone: '555-2007', hospital: 'Diabetes Center' },
  { id: 'DR008', name: 'Dr. Harris', specialty: 'Gastroenterology', licenseNo: 'MD-100008', phone: '555-2008', hospital: 'Digestive Health Institute' },
  { id: 'DR009', name: 'Dr. Ingram', specialty: 'Neurology', licenseNo: 'MD-100009', phone: '555-2009', hospital: 'Neuro Sciences Center' },
  { id: 'DR010', name: 'Dr. Jones', specialty: 'Oncology', licenseNo: 'MD-100010', phone: '555-2010', hospital: 'Cancer Treatment Center' },
];

// --- Insurance Providers ---
export const mockInsuranceProviders: InsuranceProvider[] = [
  { id: 'INS001', name: 'BlueCross BlueShield', planType: 'PPO', coveragePercent: 80, contactPhone: '800-555-1001' },
  { id: 'INS002', name: 'Aetna Health', planType: 'HMO', coveragePercent: 75, contactPhone: '800-555-1002' },
  { id: 'INS003', name: 'UnitedHealth Group', planType: 'EPO', coveragePercent: 85, contactPhone: '800-555-1003' },
  { id: 'INS004', name: 'Cigna Healthcare', planType: 'PPO', coveragePercent: 70, contactPhone: '800-555-1004' },
  { id: 'INS005', name: 'Humana', planType: 'HMO', coveragePercent: 78, contactPhone: '800-555-1005' },
];

// --- Prescriptions ---
export const mockPrescriptions: Prescription[] = [
  { id: 'RX001', rxNumber: 'RX001', patientId: 'P001', patientName: 'John Smith', doctorName: 'Dr. Adams', date: '2026-01-15', status: 'Active', items: [
    { drugCode: 'AMOX-500', drugName: 'Amoxicillin 500mg', dosage: '500mg', frequency: 'Three times daily', duration: '7 days', quantity: 21 },
    { drugCode: 'PARA-500', drugName: 'Paracetamol 500mg', dosage: '500mg', frequency: 'As needed', duration: '7 days', quantity: 14 },
  ]},
  { id: 'RX002', rxNumber: 'RX002', patientId: 'P002', patientName: 'Mary Johnson', doctorName: 'Dr. Baker', date: '2026-02-01', status: 'Active', items: [
    { drugCode: 'AMLO-5', drugName: 'Amlodipine 5mg', dosage: '5mg', frequency: 'Once daily', duration: '30 days', quantity: 30 },
    { drugCode: 'METF-500', drugName: 'Metformin 500mg', dosage: '500mg', frequency: 'Twice daily', duration: '30 days', quantity: 60 },
    { drugCode: 'OMEP-20', drugName: 'Omeprazole 20mg', dosage: '20mg', frequency: 'Once daily', duration: '14 days', quantity: 14 },
  ]},
  { id: 'RX003', rxNumber: 'RX003', patientId: 'P003', patientName: 'Robert Wilson', doctorName: 'Dr. Clark', date: '2026-06-10', status: 'Expired', items: [
    { drugCode: 'ATEN-50', drugName: 'Atenolol 50mg', dosage: '50mg', frequency: 'Once daily', duration: '30 days', quantity: 30 },
  ]},
  { id: 'RX004', rxNumber: 'RX004', patientId: 'P004', patientName: 'Patricia Davis', doctorName: 'Dr. Davis', date: '2026-07-01', status: 'Active', items: [
    { drugCode: 'SALB-INH', drugName: 'Salbutamol Inhaler 100mcg', dosage: '2 puffs', frequency: 'As needed', duration: '90 days', quantity: 1 },
    { drugCode: 'PRED-5', drugName: 'Prednisolone 5mg', dosage: '5mg', frequency: 'Once daily', duration: '5 days', quantity: 5 },
  ]},
  { id: 'RX005', rxNumber: 'RX005', patientId: 'P005', patientName: 'James Brown', doctorName: 'Dr. Evans', date: '2026-07-15', status: 'Active', items: [
    { drugCode: 'IBU-400', drugName: 'Ibuprofen 400mg', dosage: '400mg', frequency: 'Three times daily', duration: '10 days', quantity: 30 },
  ]},
  { id: 'RX006', rxNumber: 'RX006', patientId: 'P006', patientName: 'Linda Martinez', doctorName: 'Dr. Foster', date: '2026-08-01', status: 'Filled', items: [
    { drugCode: 'CLOT-CRM', drugName: 'Clotrimazole Cream 1%', dosage: 'Apply twice', frequency: 'Twice daily', duration: '14 days', quantity: 1 },
    { drugCode: 'FLUCON-150', drugName: 'Fluconazole 150mg', dosage: '150mg', frequency: 'Single dose', duration: '1 day', quantity: 1 },
  ]},
  { id: 'RX007', rxNumber: 'RX007', patientId: 'P007', patientName: 'Michael Garcia', doctorName: 'Dr. Green', date: '2026-08-10', status: 'Active', items: [
    { drugCode: 'METF-850', drugName: 'Metformin 850mg', dosage: '850mg', frequency: 'Twice daily', duration: '30 days', quantity: 60 },
    { drugCode: 'GLIB-5', drugName: 'Glibenclamide 5mg', dosage: '5mg', frequency: 'Once daily', duration: '30 days', quantity: 30 },
    { drugCode: 'LOSI-50', drugName: 'Losartan 50mg', dosage: '50mg', frequency: 'Once daily', duration: '30 days', quantity: 30 },
  ]},
  { id: 'RX008', rxNumber: 'RX008', patientId: 'P008', patientName: 'Barbara Clark', doctorName: 'Dr. Harris', date: '2026-08-14', status: 'Active', items: [
    { drugCode: 'RANI-150', drugName: 'Ranitidine 150mg', dosage: '150mg', frequency: 'Twice daily', duration: '14 days', quantity: 28 },
  ]},
];

// --- Mock Transactions ---
export const mockTransactions: Transaction[] = [
  { id: 'TRX001', voucherNo: 'V-2026-0001', date: '2026-08-01', patientId: 'P001', patientName: 'John Smith', prescriptionNo: 'RX001', lineItems: [], subTotal: 39.71, taxTotal: 5.96, discountTotal: 0, grandTotal: 45.67, paymentMethod: 'Cash', status: 'Completed', branchId: 'BR001', cashierId: 'U004', notes: '' },
  { id: 'TRX002', voucherNo: 'V-2026-0002', date: '2026-08-02', patientId: 'P002', patientName: 'Mary Johnson', prescriptionNo: 'RX002', lineItems: [], subTotal: 28.26, taxTotal: 4.24, discountTotal: 0, grandTotal: 32.50, paymentMethod: 'Credit Card', status: 'Completed', branchId: 'BR001', cashierId: 'U004', notes: '' },
  { id: 'TRX003', voucherNo: 'V-2026-0003', date: '2026-08-03', patientId: 'P003', patientName: 'Robert Wilson', prescriptionNo: '', lineItems: [], subTotal: 11.30, taxTotal: 1.69, discountTotal: 0, grandTotal: 12.99, paymentMethod: 'Cash', status: 'Completed', branchId: 'BR001', cashierId: 'U002', notes: '' },
  { id: 'TRX004', voucherNo: 'V-2026-0004', date: '2026-08-04', patientId: 'P004', patientName: 'Patricia Davis', prescriptionNo: 'RX004', lineItems: [], subTotal: 68.04, taxTotal: 10.21, discountTotal: 0, grandTotal: 78.25, paymentMethod: 'Insurance', status: 'Completed', branchId: 'BR002', cashierId: 'U004', notes: 'Insurance claim submitted' },
  { id: 'TRX005', voucherNo: 'V-2026-0005', date: '2026-08-05', patientId: 'P005', patientName: 'James Brown', prescriptionNo: 'RX005', lineItems: [], subTotal: 48.26, taxTotal: 7.24, discountTotal: 0, grandTotal: 55.50, paymentMethod: 'Credit Card', status: 'Completed', branchId: 'BR001', cashierId: 'U002', notes: '' },
  { id: 'TRX006', voucherNo: 'V-2026-0006', date: '2026-08-06', patientId: 'P006', patientName: 'Linda Martinez', prescriptionNo: 'RX006', lineItems: [], subTotal: 37.17, taxTotal: 5.58, discountTotal: 0, grandTotal: 42.75, paymentMethod: 'Mobile Payment', status: 'Completed', branchId: 'BR003', cashierId: 'U004', notes: '' },
  { id: 'TRX007', voucherNo: 'V-2026-0007', date: '2026-08-07', patientId: 'P007', patientName: 'Michael Garcia', prescriptionNo: '', lineItems: [], subTotal: 13.90, taxTotal: 2.09, discountTotal: 0, grandTotal: 15.99, paymentMethod: 'Cash', status: 'Completed', branchId: 'BR001', cashierId: 'U002', notes: '' },
  { id: 'TRX008', voucherNo: 'V-2026-0008', date: '2026-08-08', patientId: 'P008', patientName: 'Barbara Clark', prescriptionNo: 'RX008', lineItems: [], subTotal: 24.78, taxTotal: 3.72, discountTotal: 0, grandTotal: 28.50, paymentMethod: 'Debit Card', status: 'Completed', branchId: 'BR001', cashierId: 'U004', notes: '' },
];

// --- Drug Categories for dropdown ---
export const drugCategories = [
  'All Categories',
  'Antibiotic',
  'Analgesic',
  'Antihypertensive',
  'Antidiabetic',
  'Antifungal',
  'Antihistamine',
  'Antacid',
  'Vitamin',
  'Controlled',
  'OTC',
  'Cardiovascular',
  'Respiratory',
  'Gastrointestinal',
  'Dermatological',
  'Neurological',
];

// --- UOM Options ---
export const uomOptions = [
  'Tablet',
  'Capsule',
  'Bottle',
  'Box',
  'Tube',
  'Vial',
  'Ampoule',
  'Strip',
  'Pack',
  'Each',
];

// --- Payment Methods ---
export const paymentMethods = [
  'Cash',
  'Credit Card',
  'Debit Card',
  'Insurance',
  'Mobile Payment',
];

// --- Voucher Definitions ---
export const voucherDefinitions = ['Sale', 'Return', 'Transfer', 'Adjustment'];

// --- Date Criteria Options ---
export const dateCriteriaOptions = ['Today', 'This Week', 'This Month', 'This Quarter', 'Custom'];

// --- Purpose Options ---
export const purposeOptions = [
  'Regular Sale',
  'Prescription Fill',
  'Refill',
  'Emergency Dispensing',
  'Insurance Claim',
  'Return/Exchange',
  'Stock Transfer',
  'Sample Distribution',
];
