import React from 'react';
import { usePOSStore } from '../store/posStore';
import {
  periodOptions,
  orgUnitOptions,
  paymentMethods,
  storeOptions,
  purposeOptions,
  termOptions,
} from '../data/mockData';
import { formatCurrency } from '../utils/helpers';

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
    toStore,
    purpose,
    voucherNote,
    lineItemNote,
    lineItemNoteEnabled,
    term,
    extensions,
    fsNo,
    mrcNo,
    setRightPanelField,
    setExtension,
    clearCart,
  } = usePOSStore();

  return (
    <aside className="pos-right-panel">
      <table className="right-panel-table">
        <tbody>
          {/* 1. Voucher No */}
          <tr>
            <td className="label-cell">Voucher No</td>
            <td className="input-cell">
              <input
                type="text"
                value={currentVoucherNo}
                onChange={(e) => setRightPanelField('currentVoucherNo', e.target.value)}
              />
            </td>
          </tr>

          {/* 2. Period */}
          <tr>
            <td className="label-cell">Period</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={period}
                  onChange={(e) => setRightPanelField('period', e.target.value)}
                />
                <select
                  value={period}
                  onChange={(e) => setRightPanelField('period', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  {periodOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          {/* 3. Remark */}
          <tr>
            <td className="label-cell">Remark</td>
            <td className="input-cell">
              <input
                type="text"
                value={remark}
                onChange={(e) => setRightPanelField('remark', e.target.value)}
              />
            </td>
          </tr>

          {/* 4. Organization Unit */}
          <tr>
            <td className="label-cell">Organization Unit</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={organizationUnit}
                  onChange={(e) => setRightPanelField('organizationUnit', e.target.value)}
                />
                <select
                  value={organizationUnit}
                  onChange={(e) => setRightPanelField('organizationUnit', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  {orgUnitOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          {/* 5. Quantity */}
          <tr>
            <td className="label-cell">Quantity</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={totalQuantity.toFixed(4)}
                  readOnly
                  style={{ textAlign: 'right', fontWeight: 700 }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', height: '22px' }}>
                  <button className="btn-ctrl-dropdown" style={{ height: '11px', fontSize: '7px' }}>▲</button>
                  <button className="btn-ctrl-dropdown" style={{ height: '11px', fontSize: '7px' }}>▼</button>
                </div>
              </div>
            </td>
          </tr>

          {/* 6. Value */}
          <tr>
            <td className="label-cell">Value</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={formatCurrency(totalValue)}
                  readOnly
                  style={{ textAlign: 'right', fontWeight: 600 }}
                />
                <button className="btn-ctrl-dropdown">▾</button>
              </div>
            </td>
          </tr>

          {/* 7. Payment Options */}
          <tr>
            <td className="label-cell">Payment Options</td>
            <td className="input-cell">
              <div className="input-control-group">
                <select
                  value={paymentMethod}
                  onChange={(e) => setRightPanelField('paymentMethod', e.target.value)}
                  style={{ width: '100%' }}
                >
                  {paymentMethods.map((pm) => (
                    <option key={pm} value={pm}>{pm}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          {/* 8. Cart */}
          <tr>
            <td className="label-cell">Cart</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={cartCount > 0 ? `${cartCount} Active Line Items` : '0 Items (Empty)'}
                  readOnly
                />
                <button className="btn-ctrl-dropdown">▾</button>
                <button className="btn-ctrl-red-x" onClick={clearCart} title="Clear Cart Items">✕</button>
              </div>
            </td>
          </tr>

          {/* 9. Serial Number */}
          <tr>
            <td className="label-cell">Serial Number</td>
            <td className="input-cell">
              <div className="input-control-group">
                <button className="btn-ctrl-plus" title="Add New Serial">+</button>
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setRightPanelField('serialNumber', e.target.value)}
                />
                <button className="btn-ctrl-dropdown">▾</button>
              </div>
            </td>
          </tr>

          {/* 10. From Store */}
          <tr>
            <td className="label-cell">From Store</td>
            <td className="input-cell">
              <div className="input-control-group">
                <button className="btn-ctrl-plus" style={{ fontSize: '9px' }}>...</button>
                <input
                  type="text"
                  value={fromStore}
                  onChange={(e) => setRightPanelField('fromStore', e.target.value)}
                />
                <select
                  value={fromStore}
                  onChange={(e) => setRightPanelField('fromStore', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  {storeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <button className="btn-ctrl-red-x" onClick={() => setRightPanelField('fromStore', '')} title="Clear From Store">✕</button>
              </div>
            </td>
          </tr>

          {/* 11. To Store */}
          <tr>
            <td className="label-cell">To Store</td>
            <td className="input-cell">
              <div className="input-control-group">
                <button className="btn-ctrl-plus" style={{ fontSize: '9px' }}>...</button>
                <input
                  type="text"
                  value={toStore}
                  onChange={(e) => setRightPanelField('toStore', e.target.value)}
                />
                <select
                  value={toStore}
                  onChange={(e) => setRightPanelField('toStore', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  {storeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <button className="btn-ctrl-red-x" onClick={() => setRightPanelField('toStore', '')} title="Clear To Store">✕</button>
              </div>
            </td>
          </tr>

          {/* 12. Purpose */}
          <tr>
            <td className="label-cell">Purpose</td>
            <td className="input-cell">
              <div className="input-control-group">
                <select
                  value={purpose}
                  onChange={(e) => setRightPanelField('purpose', e.target.value)}
                  style={{ width: '100%' }}
                >
                  {purposeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          {/* 13. Voucher Note */}
          <tr>
            <td className="label-cell" style={{ verticalAlign: 'top', paddingTop: '6px' }}>Voucher Note</td>
            <td className="input-cell">
              <div className="input-control-group" style={{ alignItems: 'flex-end' }}>
                <textarea
                  rows={2}
                  value={voucherNote}
                  onChange={(e) => setRightPanelField('voucherNote', e.target.value)}
                />
                <button className="btn-ctrl-dropdown" style={{ height: '38px' }}>▾</button>
              </div>
            </td>
          </tr>

          {/* 14. Lineitem Note */}
          <tr>
            <td className="label-cell">Lineitem Note</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="checkbox"
                  checked={lineItemNoteEnabled}
                  onChange={(e) => setRightPanelField('lineItemNoteEnabled', e.target.checked)}
                  style={{ width: '16px', height: '16px', margin: 0, cursor: 'pointer' }}
                />
                <input
                  type="text"
                  value={lineItemNote}
                  onChange={(e) => setRightPanelField('lineItemNote', e.target.value)}
                  disabled={!lineItemNoteEnabled}
                />
                <button className="btn-ctrl-dropdown">▾</button>
              </div>
            </td>
          </tr>

          {/* 15. Term */}
          <tr>
            <td className="label-cell">Term</td>
            <td className="input-cell">
              <div className="input-control-group">
                <button className="btn-ctrl-plus" title="Add Term">+</button>
                <input
                  type="text"
                  value={term}
                  onChange={(e) => setRightPanelField('term', e.target.value)}
                />
                <select
                  value={term}
                  onChange={(e) => setRightPanelField('term', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  {termOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </td>
          </tr>

          {/* 16. LineitemExtension 1 (Orange Background) */}
          <tr className="extension-orange">
            <td className="label-cell">LineitemExtension 1</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.lineItemExt1}
                onChange={(e) => setExtension('lineItemExt1', e.target.value)}
              />
            </td>
          </tr>

          {/* 17. LineitemExtension 2 (Orange Background) */}
          <tr className="extension-orange">
            <td className="label-cell">LineitemExtension 2</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.lineItemExt2}
                onChange={(e) => setExtension('lineItemExt2', e.target.value)}
              />
            </td>
          </tr>

          {/* 18. VoucherExtension1 */}
          <tr>
            <td className="label-cell">VoucherExtension1</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt1}
                onChange={(e) => setExtension('voucherExt1', e.target.value)}
              />
            </td>
          </tr>

          {/* 19. VoucherExtension2 */}
          <tr>
            <td className="label-cell">VoucherExtension2</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt2}
                onChange={(e) => setExtension('voucherExt2', e.target.value)}
              />
            </td>
          </tr>

          {/* 20. VoucherExtension3 */}
          <tr>
            <td className="label-cell">VoucherExtension3</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt3}
                onChange={(e) => setExtension('voucherExt3', e.target.value)}
              />
            </td>
          </tr>

          {/* 21. VoucherExtension4 */}
          <tr>
            <td className="label-cell">VoucherExtension4</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt4}
                onChange={(e) => setExtension('voucherExt4', e.target.value)}
              />
            </td>
          </tr>

          {/* 22. VoucherExtension5 */}
          <tr>
            <td className="label-cell">VoucherExtension5</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt5}
                onChange={(e) => setExtension('voucherExt5', e.target.value)}
              />
            </td>
          </tr>

          {/* 23. VoucherExtension6 */}
          <tr>
            <td className="label-cell">VoucherExtension6</td>
            <td className="input-cell">
              <input
                type="text"
                value={extensions.voucherExt6}
                onChange={(e) => setExtension('voucherExt6', e.target.value)}
              />
            </td>
          </tr>

          {/* 24. VoucherExtension7 */}
          <tr>
            <td className="label-cell">VoucherExtension7</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={extensions.voucherExt7}
                  onChange={(e) => setExtension('voucherExt7', e.target.value)}
                />
                <select
                  value={extensions.voucherExt7}
                  onChange={(e) => setExtension('voucherExt7', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  <option value="Refills Authorized: 3 of 5">Refills Authorized: 3 of 5</option>
                  <option value="Refills Authorized: 1 of 3">Refills Authorized: 1 of 3</option>
                  <option value="No Refills Authorized (0)">No Refills Authorized (0)</option>
                  <option value="PRN Refills Allowed">PRN Refills Allowed</option>
                </select>
              </div>
            </td>
          </tr>

          {/* 25. VoucherExtension8 */}
          <tr>
            <td className="label-cell">VoucherExtension8</td>
            <td className="input-cell">
              <div className="input-control-group">
                <input
                  type="text"
                  value={extensions.voucherExt8}
                  onChange={(e) => setExtension('voucherExt8', e.target.value)}
                />
                <select
                  value={extensions.voucherExt8}
                  onChange={(e) => setExtension('voucherExt8', e.target.value)}
                  className="btn-ctrl-dropdown"
                  style={{ width: '18px', padding: 0 }}
                >
                  <option value="30 Days Supply">30 Days Supply</option>
                  <option value="60 Days Supply">60 Days Supply</option>
                  <option value="90 Days Supply">90 Days Supply</option>
                  <option value="14 Days Supply">14 Days Supply</option>
                </select>
              </div>
            </td>
          </tr>

          {/* 26. FS No. */}
          <tr>
            <td className="label-cell">FS No.</td>
            <td className="input-cell">
              <input
                type="text"
                value={fsNo}
                onChange={(e) => setRightPanelField('fsNo', e.target.value)}
              />
            </td>
          </tr>

          {/* 27. MRC No. */}
          <tr>
            <td className="label-cell">MRC No.</td>
            <td className="input-cell">
              <input
                type="text"
                value={mrcNo}
                onChange={(e) => setRightPanelField('mrcNo', e.target.value)}
              />
            </td>
          </tr>

          {/* 28. Sub Total */}
          <tr className="subtotal-row">
            <td className="subtotal-label">Sub Total</td>
            <td className="subtotal-val-cell">{totalValue.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};
