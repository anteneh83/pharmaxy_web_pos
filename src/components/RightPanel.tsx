import React from 'react';
import { usePOSStore } from '../store/posStore';
import { paymentMethods, purposeOptions } from '../data/mockData';
import { formatCurrency } from '../utils/helpers';
import type { PaymentMethod } from '../types/pos.types';

export const RightPanel: React.FC = () => {
  const {
    currentVoucherNo,
    period,
    remark,
    organizationUnit,
    totalQuantity,
    totalValue,
    paymentMethod,
    cartCount,
    serialNumber,
    fromStore,
    purpose,
    voucherNote,
    lineItemNote,
    lineItemNoteEnabled,
    term,
    extensions,
    fsNo,
    mrcNo,
    subTotal,
    setRightPanelField,
    setExtension,
    clearCart,
  } = usePOSStore();

  return (
    <aside className="pos-right-panel">
      <div style={{ padding: '8px 12px', background: 'var(--header-bg)', fontWeight: 700, borderBottom: '1px solid var(--border-subtle)', color: 'var(--accent-cyan)' }}>
        Voucher Details & Extensions
      </div>

      <table className="right-panel-table">
        <tbody>
          {/* Voucher No */}
          <tr>
            <td className="label-cell">Voucher No</td>
            <td className="input-cell">
              <input type="text" value={currentVoucherNo} onChange={(e) => setRightPanelField('currentVoucherNo', e.target.value)} />
            </td>
          </tr>

          {/* Period */}
          <tr>
            <td className="label-cell">Period</td>
            <td className="input-cell">
              <input type="text" value={period} onChange={(e) => setRightPanelField('period', e.target.value)} />
            </td>
          </tr>

          {/* Remark */}
          <tr>
            <td className="label-cell">Remark</td>
            <td className="input-cell">
              <input type="text" value={remark} onChange={(e) => setRightPanelField('remark', e.target.value)} />
            </td>
          </tr>

          {/* Organization Unit */}
          <tr>
            <td className="label-cell">Organization Unit</td>
            <td className="input-cell">
              <input type="text" value={organizationUnit} onChange={(e) => setRightPanelField('organizationUnit', e.target.value)} />
            </td>
          </tr>

          {/* Quantity */}
          <tr>
            <td className="label-cell">Quantity</td>
            <td className="input-cell">
              <input type="text" value={totalQuantity} readOnly style={{ fontWeight: 700, color: 'var(--accent-cyan)' }} />
            </td>
          </tr>

          {/* Value */}
          <tr>
            <td className="label-cell">Value</td>
            <td className="input-cell">
              <input type="text" value={formatCurrency(totalValue)} readOnly style={{ fontWeight: 700, color: 'var(--accent-green)' }} />
            </td>
          </tr>

          {/* Payment Options */}
          <tr>
            <td className="label-cell">Payment Options</td>
            <td className="input-cell">
              <select value={paymentMethod} onChange={(e) => setRightPanelField('paymentMethod', e.target.value as PaymentMethod)}>
                {paymentMethods.map((pm) => (
                  <option key={pm} value={pm}>{pm}</option>
                ))}
              </select>
            </td>
          </tr>

          {/* Cart */}
          <tr>
            <td className="label-cell">Cart</td>
            <td className="input-cell">
              <input type="text" value={`${cartCount} Items`} readOnly />
            </td>
          </tr>

          {/* Serial Number */}
          <tr>
            <td className="label-cell">Serial Number</td>
            <td className="input-cell">
              <div style={{ display: 'flex', gap: '2px' }}>
                <button className="flag-btn" style={{ padding: '0 6px' }}>+</button>
                <input type="text" value={serialNumber} onChange={(e) => setRightPanelField('serialNumber', e.target.value)} />
              </div>
            </td>
          </tr>

          {/* From Store */}
          <tr>
            <td className="label-cell">From Store</td>
            <td className="input-cell">
              <input type="text" value={fromStore} onChange={(e) => setRightPanelField('fromStore', e.target.value)} />
            </td>
          </tr>

          {/* Store Controls Bar (+ / - / cancel icon matching screenshot) */}
          <tr>
            <td colSpan={2} style={{ padding: '4px 8px', background: 'var(--panel-bg-alt)' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <button className="flag-btn" title="Move Top">⬆️</button>
                <button className="flag-btn" title="Move Down">⬇️</button>
                <button className="flag-btn" title="Void Cart" onClick={clearCart} style={{ color: 'var(--accent-red)' }}>🚫 Void</button>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginLeft: 'auto' }}>Direct Store Sync</span>
              </div>
            </td>
          </tr>

          {/* Purpose */}
          <tr>
            <td className="label-cell">Purpose</td>
            <td className="input-cell">
              <select value={purpose} onChange={(e) => setRightPanelField('purpose', e.target.value)}>
                {purposeOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </td>
          </tr>

          {/* Voucher Note */}
          <tr>
            <td className="label-cell">Voucher Note</td>
            <td className="input-cell">
              <textarea rows={2} value={voucherNote} onChange={(e) => setRightPanelField('voucherNote', e.target.value)} />
            </td>
          </tr>

          {/* LineItem Note */}
          <tr>
            <td className="label-cell">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input
                  type="checkbox"
                  checked={lineItemNoteEnabled}
                  onChange={(e) => setRightPanelField('lineItemNoteEnabled', e.target.checked)}
                />
                <span>Lineitem Note</span>
              </div>
            </td>
            <td className="input-cell">
              <textarea rows={2} value={lineItemNote} onChange={(e) => setRightPanelField('lineItemNote', e.target.value)} disabled={!lineItemNoteEnabled} />
            </td>
          </tr>

          {/* Term */}
          <tr>
            <td className="label-cell">Term</td>
            <td className="input-cell">
              <div style={{ display: 'flex', gap: '2px' }}>
                <button className="flag-btn" style={{ padding: '0 6px' }}>+</button>
                <input type="text" value={term} onChange={(e) => setRightPanelField('term', e.target.value)} />
              </div>
            </td>
          </tr>

          {/* LineItemExtension1 (Orange Highlighted in Screenshot) */}
          <tr className="extension-orange">
            <td className="label-cell">LineitemExtension1</td>
            <td className="input-cell">
              <input type="text" value={extensions.lineItemExt1} onChange={(e) => setExtension('lineItemExt1', e.target.value)} placeholder="Controlled Drug Rule" />
            </td>
          </tr>

          {/* LineItemExtension2 (Orange Highlighted in Screenshot) */}
          <tr className="extension-orange">
            <td className="label-cell">LineitemExtension2</td>
            <td className="input-cell">
              <input type="text" value={extensions.lineItemExt2} onChange={(e) => setExtension('lineItemExt2', e.target.value)} placeholder="Batch Expiry Alert" />
            </td>
          </tr>

          {/* VoucherExtension 1 - 8 */}
          <tr>
            <td className="label-cell">VoucherExtension1</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt1} onChange={(e) => setExtension('voucherExt1', e.target.value)} placeholder="Insurance Claim #" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension2</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt2} onChange={(e) => setExtension('voucherExt2', e.target.value)} placeholder="Prior Authorization #" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension3</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt3} onChange={(e) => setExtension('voucherExt3', e.target.value)} placeholder="DEA Registration #" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension4</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt4} onChange={(e) => setExtension('voucherExt4', e.target.value)} placeholder="Doctor NPI #" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension5</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt5} onChange={(e) => setExtension('voucherExt5', e.target.value)} placeholder="Dispensing Pharmacist" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension6</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt6} onChange={(e) => setExtension('voucherExt6', e.target.value)} placeholder="Verification Code" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension7</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt7} onChange={(e) => setExtension('voucherExt7', e.target.value)} placeholder="Refills Authorized" /></td>
          </tr>
          <tr>
            <td className="label-cell">VoucherExtension8</td>
            <td className="input-cell"><input type="text" value={extensions.voucherExt8} onChange={(e) => setExtension('voucherExt8', e.target.value)} placeholder="Days Supply" /></td>
          </tr>

          {/* FS No */}
          <tr>
            <td className="label-cell">FS No</td>
            <td className="input-cell">
              <input type="text" value={fsNo} onChange={(e) => setRightPanelField('fsNo', e.target.value)} placeholder="Rx Prescription Number" />
            </td>
          </tr>

          {/* MRC No */}
          <tr>
            <td className="label-cell">MRC No</td>
            <td className="input-cell">
              <input type="text" value={mrcNo} onChange={(e) => setRightPanelField('mrcNo', e.target.value)} placeholder="Medical Record Number" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Sub Total Summary Box */}
      <div className="subtotal-box">
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
          SUB TOTAL (Net + Tax 15%)
        </div>
        <div className="subtotal-val">
          {formatCurrency(totalValue)}
        </div>
        <div style={{ fontSize: '10px', color: 'var(--accent-cyan)', marginTop: '2px' }}>
          Net: {formatCurrency(subTotal)} | Tax: {formatCurrency(totalValue - subTotal)}
        </div>
      </div>
    </aside>
  );
};
