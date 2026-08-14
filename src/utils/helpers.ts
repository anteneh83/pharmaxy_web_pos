import { systemConfig } from '../data/mockData';

export const formatCurrency = (amount: number): string => {
  return `${systemConfig.currencySymbol}${amount.toFixed(2)}`;
};

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const generateReceiptHTML = (
  voucherNo: string,
  patientName: string,
  items: Array<{ name: string; qty: number; price: number; total: number }>,
  subTotal: number,
  tax: number,
  grandTotal: number,
  paymentMethod: string
): string => {
  return `
    <html>
      <head>
        <title>Receipt - ${voucherNo}</title>
        <style>
          body { font-family: 'Courier New', monospace; width: 300px; padding: 10px; margin: 0 auto; background: #fff; color: #000; }
          .header { text-align: center; border-bottom: 1px dashed #000; padding-bottom: 10px; margin-bottom: 10px; }
          .header h2 { margin: 0; font-size: 18px; }
          .header p { margin: 2px 0; font-size: 11px; }
          .info { margin-bottom: 10px; font-size: 11px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 11px; }
          .table th { text-align: left; border-bottom: 1px solid #000; }
          .table td { padding: 4px 0; }
          .totals { border-top: 1px dashed #000; padding-top: 8px; font-size: 12px; }
          .totals div { display: flex; justify-content: space-between; margin-bottom: 3px; }
          .footer { text-align: center; margin-top: 15px; border-top: 1px dashed #000; padding-top: 10px; font-size: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>${systemConfig.companyName}</h2>
          <p>${systemConfig.companyAddress}</p>
          <p>Tel: 555-1001 | Lic: PH-99021</p>
        </div>
        <div class="info">
          <div><strong>Voucher #:</strong> ${voucherNo}</div>
          <div><strong>Date:</strong> ${new Date().toLocaleString()}</div>
          <div><strong>Patient:</strong> ${patientName || 'Walk-in'}</div>
          <div><strong>Payment:</strong> ${paymentMethod}</div>
        </div>
        <table class="table">
          <thead>
            <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
          </thead>
          <tbody>
            ${items
              .map(
                (item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${item.total.toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
        <div class="totals">
          <div><span>Subtotal:</span> <span>$${subTotal.toFixed(2)}</span></div>
          <div><span>Tax (15%):</span> <span>$${tax.toFixed(2)}</span></div>
          <div style="font-weight: bold; font-size: 14px;"><span>GRAND TOTAL:</span> <span>$${grandTotal.toFixed(2)}</span></div>
        </div>
        <div class="footer">
          <p>${systemConfig.receiptFooter}</p>
          <p>Prescription drugs dispensed according to law.</p>
        </div>
      </body>
    </html>
  `;
};
