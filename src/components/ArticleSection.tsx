import React, { useState } from 'react';
import { usePOSStore } from '../store/posStore';
import { mockDrugs, drugCategories, uomOptions } from '../data/mockData';
import type { UnitOfMeasure } from '../types/pos.types';

export const ArticleSection: React.FC = () => {
  const {
    selectedDrug,
    selectedUOM,
    articleDescription,
    selectedCategory,
    articleLocation,
    setSelectedDrug,
    setSelectedUOM,
    setSelectedCategory,
    setArticleLocation,
    addLineItem,
    clearCart,
    addAllSuggested,
    scanBarcode,
  } = usePOSStore();

  const [direct, setDirect] = useState(true);
  const [barcodeInput, setBarcodeInput] = useState('');
  const [scaleWeight, setScaleWeight] = useState<string | null>(null);

  const handleDrugSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const drug = mockDrugs.find((d) => d.code === code);
    if (drug) {
      setSelectedDrug(drug);
    }
  };

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barcodeInput) return;
    const scanned = scanBarcode(barcodeInput);
    if (!scanned) {
      alert(`Barcode "${barcodeInput}" not found in drug database.`);
    } else {
      setBarcodeInput('');
    }
  };

  const handleReadScale = () => {
    const randomGrams = (Math.random() * 450 + 50).toFixed(1);
    setScaleWeight(`${randomGrams} g`);
  };

  return (
    <div className="article-card">
      {/* Top Bar: Direct Checkbox & Barcode / Weight scale mock */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <input
            type="checkbox"
            id="directCheck"
            checked={direct}
            onChange={(e) => setDirect(e.target.checked)}
          />
          <label htmlFor="directCheck" style={{ fontWeight: 600, color: 'var(--accent-cyan)', cursor: 'pointer' }}>
            Direct Drug Entry
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Barcode scanner mock form */}
          <form onSubmit={handleBarcodeSubmit} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-muted)' }}>📷 Barcode:</label>
            <input
              type="text"
              className="pos-input pos-input-sm"
              placeholder="Scan or enter e.g. 1234567890123"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
            />
            <button type="submit" className="flag-btn" title="Simulate Barcode Scanner">
              Scan
            </button>
          </form>

          {/* Weight Scale mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-muted)' }}>⚖️ Scale:</label>
            <button type="button" onClick={handleReadScale} className="flag-btn" title="Read Weight Scale">
              {scaleWeight ? scaleWeight : 'Read Scale'}
            </button>
          </div>
        </div>
      </div>

      {/* Row 1: Article Search Dropdown */}
      <div className="article-row-1">
        <label className="consignee-label">Article</label>
        <select
          className="pos-select"
          value={selectedDrug ? selectedDrug.code : ''}
          onChange={handleDrugSelect}
        >
          <option value="">-- Select Drug / Medicine --</option>
          {mockDrugs.map((drug) => (
            <option key={drug.id} value={drug.code}>
              [{drug.code}] {drug.name} {drug.strength} — ${drug.price.toFixed(2)} ({drug.category}) {drug.isControlled ? `🔴 Sch ${drug.schedule}` : ''}
            </option>
          ))}
        </select>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>UOM</span>
          <select
            className="pos-select"
            style={{ flex: 1 }}
            value={selectedUOM}
            onChange={(e) => setSelectedUOM(e.target.value as UnitOfMeasure)}
          >
            {uomOptions.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 2: Description */}
      <div className="article-row-2">
        <label className="consignee-label">Description</label>
        <input
          type="text"
          className="pos-input"
          style={{ gridColumn: 'span 3', width: '100%' }}
          value={articleDescription}
          readOnly
          placeholder="Drug info, active formula, dosage & stock levels will appear here..."
        />
      </div>

      {/* Row 3: Category & Location */}
      <div className="article-row-3">
        <label className="consignee-label">Category</label>
        <select
          className="pos-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {drugCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <label className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Location</label>
        <input
          type="text"
          className="pos-input"
          value={articleLocation}
          onChange={(e) => setArticleLocation(e.target.value)}
          placeholder="Shelf / Bin location"
        />
      </div>

      {/* Action Buttons: Add, Remove, Add All */}
      <div className="action-btn-group">
        <button
          className="btn-pos-action"
          style={{ background: 'var(--accent-cyan)', color: '#000', borderColor: 'var(--accent-cyan)' }}
          onClick={() => addLineItem()}
        >
          ➕ Add to Voucher
        </button>
        <button className="btn-pos-action" onClick={clearCart}>
          ❌ Remove All
        </button>
        <button className="btn-pos-action" onClick={addAllSuggested}>
          📦 Add All Suggested (3 Items)
        </button>

        {selectedDrug?.isControlled && (
          <span style={{ marginLeft: 'auto', background: '#991b1b', color: '#fecaca', padding: '3px 8px', borderRadius: '3px', fontWeight: 600, fontSize: '11px' }}>
            ⚠️ CONTROLLED DRUG SCHEDULE {selectedDrug.schedule} — LOGGING ACTIVE
          </span>
        )}
      </div>
    </div>
  );
};
