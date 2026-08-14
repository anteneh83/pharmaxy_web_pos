# Pharmacy WebPOS — Single Page Application

Build a modern, premium Pharmacy POS single-page application replicating the desktop NVS POS functionality shown in the screenshots, adapted for pharmacy use with mock data.

## Proposed Changes

### Technology Stack
- **React 18 + TypeScript + Vite** (as specified in documentation)
- **Vanilla CSS** with CSS custom properties for theming
- **Zustand** for state management
- **No external UI libraries** — all components built from scratch for full control

### Application Layout (Single Page)

The entire POS will be a single page with 3 main areas matching the screenshot:

```
┌──────────────────────────────────────────────────────────────┐
│  TOOLBAR: New(F6) | Save(F5) | Print | Issue | Attach |     │
│          Preview(F3) | Refresh(F6) | References              │
│  HEADER: Date Criteria | Start/End Date | Voucher No |       │
│          Voucher Defn | Branch dropdown                      │
├────────────────────────────────────────────┬─────────────────┤
│  LEFT PANEL (Main Work Area)               │  RIGHT PANEL    │
│                                            │  (Details/Props)│
│  ┌─ Consignee Section ──────────────────┐  │                 │
│  │ Patient 1-6 rows with dropdowns      │  │  Voucher No     │
│  │ (Adapted: Patient/Doctor consignees) │  │  Period         │
│  └──────────────────────────────────────┘  │  Remark         │
│                                            │  Org Unit       │
│  ┌─ Article Section ────────────────────┐  │  Quantity       │
│  │ Drug Search | UOM | Description      │  │  Value          │
│  │ Category | Location                  │  │  Payment Options│
│  │ [Add] [Remove] [Add All]             │  │  Cart           │
│  └──────────────────────────────────────┘  │  Serial Number  │
│                                            │  From Store     │
│  ┌─ Line Items Grid ────────────────────┐  │  Purpose        │
│  │ Drug Code | Name | U.Price | Qty |   │  │  Voucher Note   │
│  │ Total Amount | Tax Amount            │  │  LineItem Note  │
│  │ (Scrollable data grid)               │  │  Term           │
│  └──────────────────────────────────────┘  │  Extensions 1-8 │
│                                            │  FS No          │
│                                            │  MRC No         │
│                                            │  Sub Total      │
├────────────────────────────────────────────┴─────────────────┤
│  STATUS BAR                                                  │
└──────────────────────────────────────────────────────────────┘
```

### Pharmacy Adaptations

The NVS POS screenshots show a generic POS. We adapt the fields for pharmacy:

| NVS POS Field | Pharmacy Adaptation |
|---|---|
| Consignee 1-6 | Patient, Prescribing Doctor, Insurance Provider, Pharmacy, Referring Doctor, Caregiver |
| Consignee Unit | Department/Specialty for doctors, Plan for insurance |
| Article | Drug/Medicine search |
| UOM | Unit of Measure (Tablet, Capsule, Bottle, etc.) |
| Category | Drug Category (Antibiotic, Analgesic, etc.) |
| Location | Store/Shelf Location |
| Article Code | Drug Code (e.g., AMOX-250) |
| Article Name | Drug Name + Strength |
| Voucher No | Prescription/Transaction Number |
| Voucher Definition | Transaction Type (Sale, Return, Transfer) |
| Serial Number | Batch/Lot Number |
| From Store | Dispensing Branch |
| FS No | Prescription (Rx) Number |
| MRC No | Medical Record Number |
| LineItemExtension 1 | Controlled Drug Schedule |
| LineItemExtension 2 | Expiry Date |
| VoucherExtension 1-8 | Insurance Claim #, Prior Auth, DEA #, etc. |

### File Structure

```
c:\Users\USER\Desktop\WebPos\
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .env
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   ├── global.css          # Reset, variables, base styles
│   │   ├── pharmacy-theme.css  # Pharmacy-specific theming
│   │   └── components.css      # Component styles
│   ├── data/
│   │   └── mockData.ts         # All mock data (drugs, patients, etc.)
│   ├── types/
│   │   └── pos.types.ts        # TypeScript interfaces
│   ├── store/
│   │   └── posStore.ts         # Zustand store
│   ├── components/
│   │   ├── Toolbar.tsx         # Top toolbar with action buttons
│   │   ├── HeaderFilters.tsx   # Date criteria, voucher, branch
│   │   ├── ConsigneeSection.tsx# Patient/Doctor/Insurance rows
│   │   ├── ArticleSection.tsx  # Drug search, UOM, category
│   │   ├── LineItemsGrid.tsx   # Drug line items table
│   │   ├── RightPanel.tsx      # Voucher details & extensions
│   │   └── StatusBar.tsx       # Bottom status bar
│   └── utils/
│       └── helpers.ts          # Utility functions
```

### Components Detail

#### 1. Toolbar (`Toolbar.tsx`)
- Icon buttons: New (F6), Save (F5), Print Online, Issue Card, Attach File, Show Preview (F3), Refresh (F6), Show My References
- Keyboard shortcuts support
- Pharmacy pill/capsule icon branding

#### 2. Header Filters (`HeaderFilters.tsx`)
- Date Criteria dropdown (Today, This Week, This Month, Custom)
- Start Date / End Date pickers
- Voucher No input with search
- Voucher Definition dropdown (Sale, Return, Transfer, Adjustment)
- Branch dropdown (populated from mock branches)
- Flag/bookmark buttons

#### 3. Consignee Section (`ConsigneeSection.tsx`)
- 6 consignee rows adapted for pharmacy:
  - Patient (searchable autocomplete from mock patients)
  - Prescribing Doctor
  - Insurance Provider
  - Pharmacy/Branch
  - Referring Doctor
  - Caregiver
- Each row has: label, value input, type dropdown, unit input, unit dropdown, status bar
- "Direct" checkbox toggle

#### 4. Article Section (`ArticleSection.tsx`)
- Drug search autocomplete (from mock drug database)
- UOM dropdown (Tablet, Capsule, Bottle, Box, Tube, etc.)
- Description auto-filled from selection
- Category dropdown (Antibiotic, Analgesic, etc.)
- Location input
- Add / Remove / Add All buttons

#### 5. Line Items Grid (`LineItemsGrid.tsx`)
- Data grid columns: Drug Code, Drug Name, U.Price, Qty, Total Amount, Tax Amount
- Editable Qty field
- Auto-calculate Total Amount (U.Price × Qty)
- Auto-calculate Tax Amount (Total × tax rate)
- Row selection, inline editing
- Scrollable with fixed headers

#### 6. Right Panel (`RightPanel.tsx`)
- Voucher No (auto-generated)
- Period
- Remark (text input)
- Organization Unit
- Quantity (auto-sum from grid)
- Value (auto-sum total)
- Payment Options (Cash, Credit, Debit, Insurance, Mobile)
- Cart indicator
- Serial Number / Batch with + button
- From Store dropdown
- +/- quantity buttons and void/cancel buttons
- Purpose dropdown
- Voucher Note (textarea)
- LineItem Note (checkbox + textarea)
- Term (dropdown with + button)
- LineItemExtension 1 (Controlled Drug Schedule — highlighted orange)
- LineItemExtension 2 (Expiry Date — highlighted orange)
- VoucherExtension 1-8
- FS No (Prescription Rx Number)
- MRC No (Medical Record Number)
- Sub Total display

### Mock Data
All mock data from the documentation will be embedded:
- 50+ drugs (regular + controlled)
- 20+ patients
- 8 prescriptions
- 8 transactions
- 5 branches
- 4 user roles
- System configuration

### Design Aesthetic
- **Dark professional theme** with pharmacy teal/cyan accent colors
- Glassmorphism panels with subtle backdrop blur
- Smooth micro-animations on interactions
- Premium typography using Inter/Roboto from Google Fonts
- Color-coded status indicators (cyan for active rows, orange for extensions)
- The layout closely mirrors the desktop NVS POS screenshots

## Verification Plan

### Manual Verification
- Run `npm run dev` and verify all sections render correctly
- Test drug search autocomplete
- Test adding/removing line items
- Test quantity editing and auto-calculations
- Test consignee row interactions
- Test keyboard shortcuts
- Verify responsive behavior
- Check that the layout matches the NVS POS screenshots
