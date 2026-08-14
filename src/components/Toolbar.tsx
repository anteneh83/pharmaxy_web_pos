import React from 'react';
import { usePOSStore } from '../store/posStore';
import { generateReceiptHTML } from '../utils/helpers';

export const Toolbar: React.FC = () => {
  const { newVoucher, lineItems, subTotal, totalValue, paymentMethod, currentVoucherNo, selectedPatient } = usePOSStore();

  const handlePrint = () => {
    if (lineItems.length === 0) {
      alert('Cart is empty. Please add items to print receipt.');
      return;
    }
    const html = generateReceiptHTML(
      currentVoucherNo,
      selectedPatient ? selectedPatient.fullName : 'Walk-in Patient',
      lineItems.map((i) => ({ name: i.drugName, qty: i.quantity, price: i.unitPrice, total: i.totalAmount })),
      subTotal,
      totalValue - subTotal,
      totalValue,
      paymentMethod
    );

    const win = window.open('', '_blank', 'width=400,height=600');
    if (win) {
      win.document.write(html);
      win.document.close();
      win.focus();
      setTimeout(() => {
        win.print();
      }, 300);
    }
  };

  const handleSave = () => {
    if (lineItems.length === 0) {
      alert('Cannot save an empty voucher!');
      return;
    }
    alert(`Transaction ${currentVoucherNo} saved successfully! Total: $${totalValue.toFixed(2)}`);
  };

  return (
    <header className="pos-toolbar-container">
      <div className="pos-title-badge">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="9" />
        </svg>
        <span>NVS POS (Pharmacy Edition)</span>
      </div>

      <div className="pos-toolbar-buttons">
        <button className="tool-btn" onClick={newVoucher} title="Create New Voucher (F4)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          <span>New (F4)</span>
        </button>

        <button className="tool-btn btn-save" onClick={handleSave} title="Save Transaction (F5)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          <span>Save (F5)</span>
        </button>

        <button className="tool-btn btn-print" onClick={handlePrint} title="Print Receipt Online">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </svg>
          <span>Print Online</span>
        </button>

        <button className="tool-btn btn-card" onClick={() => alert('Issue Loyalty/Insurance Card: Patient ID Verified')} title="Issue Card">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          <span>Issue Card</span>
        </button>

        <button className="tool-btn" onClick={() => alert('Attach Prescription Document / Photo Scan')} title="Attach File">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
          <span>Attach File</span>
        </button>

        <button className="tool-btn btn-preview" onClick={handlePrint} title="Show Receipt Preview (F3)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>Preview (F3)</span>
        </button>

        <button className="tool-btn btn-refresh" onClick={() => window.location.reload()} title="Refresh Form (F6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          <span>Refresh (F6)</span>
        </button>

        <button className="tool-btn" onClick={() => alert('Drug Reference Database: 54 Pharmacopeia Drugs Active')} title="Show My References">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>References</span>
        </button>
      </div>
    </header>
  );
};
