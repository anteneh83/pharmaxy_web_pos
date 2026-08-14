import React from 'react';
import { usePOSStore } from '../store/posStore';
import { mockBranches } from '../data/mockData';

export const StatusBar: React.FC = () => {
  const { lineItems, totalValue, selectedBranch } = usePOSStore();
  const totalItemsCount = lineItems.reduce((acc, item) => acc + item.quantity, 0);

  const branchName = mockBranches.find((b) => b.code === selectedBranch)?.name || 'Main Pharmacy Branch';

  return (
    <footer className="pos-status-bar">
      <div className="status-pill">
        <span className="status-indicator"></span>
        <span>Status: <strong>READY (Database Connected)</strong></span>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <span>Branch: <strong>{branchName}</strong></span>
        <span>Operator: <strong>Pharm. Sarah Chen (#RPH-4402)</strong></span>
        <span>Items: <strong>{totalItemsCount}</strong></span>
        <span>Total: <strong style={{ color: 'var(--accent-cyan)' }}>${totalValue.toFixed(2)}</strong></span>
      </div>

      <div style={{ opacity: 0.8, fontSize: '10px' }}>
        <span>F4: New | F5: Save | F3: Preview | F6: Refresh</span>
      </div>
    </footer>
  );
};
