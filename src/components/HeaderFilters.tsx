import React from 'react';
import { usePOSStore } from '../store/posStore';
import { mockBranches, dateCriteriaOptions, voucherDefinitions } from '../data/mockData';

export const HeaderFilters: React.FC = () => {
  const {
    dateCriteria,
    startDate,
    endDate,
    currentVoucherNo,
    voucherDefinition,
    selectedBranch,
    setHeaderFilter,
    loadPrescriptionByNo,
  } = usePOSStore();

  const handleVoucherKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = (e.target as HTMLInputElement).value;
      if (val.toLowerCase().startsWith('rx')) {
        loadPrescriptionByNo(val);
      } else {
        setHeaderFilter('currentVoucherNo', val);
      }
    }
  };

  return (
    <div className="pos-header-filters">
      <div className="filter-group">
        <label>Date Criteria:</label>
        <select
          className="pos-select pos-input-sm"
          value={dateCriteria}
          onChange={(e) => setHeaderFilter('dateCriteria', e.target.value)}
        >
          {dateCriteriaOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Start Date:</label>
        <input
          type="date"
          className="pos-input pos-input-sm"
          value={startDate}
          onChange={(e) => setHeaderFilter('startDate', e.target.value)}
        />
        <button className="flag-btn" title="Calendar Pick">
          📅
        </button>
      </div>

      <div className="filter-group">
        <label>End Date:</label>
        <input
          type="date"
          className="pos-input pos-input-sm"
          value={endDate}
          onChange={(e) => setHeaderFilter('endDate', e.target.value)}
        />
        <button className="flag-btn" title="Calendar Pick">
          📅
        </button>
      </div>

      <div className="filter-group" style={{ marginLeft: '12px' }}>
        <label>Voucher No:</label>
        <input
          type="text"
          className="pos-input pos-input-md"
          value={currentVoucherNo}
          onChange={(e) => setHeaderFilter('currentVoucherNo', e.target.value)}
          onKeyDown={handleVoucherKeyDown}
          placeholder="e.g. V-2026-0009 or RX001"
        />
      </div>

      <div className="filter-group">
        <label>Voucher Defn:</label>
        <select
          className="pos-select pos-input-sm"
          value={voucherDefinition}
          onChange={(e) => setHeaderFilter('voucherDefinition', e.target.value as any)}
        >
          {voucherDefinitions.map((def) => (
            <option key={def} value={def}>
              {def}
            </option>
          ))}
        </select>
        <button className="flag-btn" title="Voucher Options">
          ⚙️
        </button>
      </div>

      <div className="filter-group" style={{ marginLeft: 'auto' }}>
        <label>Branch:</label>
        <select
          className="pos-select pos-input-md"
          value={selectedBranch}
          onChange={(e) => setHeaderFilter('selectedBranch', e.target.value)}
        >
          {mockBranches.map((b) => (
            <option key={b.id} value={b.code}>
              {b.name} ({b.code})
            </option>
          ))}
        </select>
        <button className="flag-btn" title="Branch Details">
          🏬
        </button>
      </div>
    </div>
  );
};
