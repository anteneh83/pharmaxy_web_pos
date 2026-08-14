import React, { useState } from 'react';
import { usePOSStore } from '../store/posStore';
import { formatCurrency } from '../utils/helpers';

export const LineItemsGrid: React.FC = () => {
  const { lineItems, removeLineItem, updateLineItemQty } = usePOSStore();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="grid-container">
      <div style={{ overflowY: 'auto', flex: 1 }}>
        <table className="grid-table">
          <thead>
            <tr>
              <th style={{ width: '120px' }}>Article Code</th>
              <th>Article Name</th>
              <th style={{ width: '100px', textAlign: 'right' }}>U.Price</th>
              <th style={{ width: '80px', textAlign: 'center' }}>Qty</th>
              <th style={{ width: '110px', textAlign: 'right' }}>Total Amount</th>
              <th style={{ width: '100px', textAlign: 'right' }}>Tax Amount</th>
              <th style={{ width: '40px', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  No items in voucher. Search and add drugs above or scan a barcode.
                </td>
              </tr>
            ) : (
              lineItems.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <tr
                    key={item.id}
                    className={isSelected ? 'selected' : ''}
                    onClick={() => setSelectedId(item.id)}
                  >
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {item.drugCode}
                      {item.isControlled && (
                        <span style={{ color: 'var(--accent-orange)', marginLeft: '4px' }} title={`Schedule ${item.schedule}`}>
                          [Sch {item.schedule}]
                        </span>
                      )}
                    </td>
                    <td>
                      {item.drugName}
                      {item.requiresPrescription && (
                        <span style={{ fontSize: '10px', background: '#3b82f6', color: '#fff', padding: '1px 4px', borderRadius: '2px', marginLeft: '6px' }}>
                          Rx
                        </span>
                      )}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)' }}>
                      {formatCurrency(item.unitPrice)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <input
                        type="number"
                        min="1"
                        className="qty-input"
                        value={item.quantity}
                        onChange={(e) => updateLineItemQty(item.id, parseInt(e.target.value) || 0)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      {formatCurrency(item.totalAmount)}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {formatCurrency(item.taxAmount)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        style={{ background: 'transparent', border: 'none', color: 'var(--accent-red)', cursor: 'pointer', fontSize: '14px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLineItem(item.id);
                        }}
                        title="Delete Item"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
