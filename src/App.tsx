import React, { useEffect } from 'react';
import { Toolbar } from './components/Toolbar';
import { HeaderFilters } from './components/HeaderFilters';
import { ConsigneeSection } from './components/ConsigneeSection';
import { ArticleSection } from './components/ArticleSection';
import { LineItemsGrid } from './components/LineItemsGrid';
import { RightPanel } from './components/RightPanel';
import { StatusBar } from './components/StatusBar';
import { usePOSStore } from './store/posStore';
import './styles/global.css';

export const App: React.FC = () => {
  const { newVoucher } = usePOSStore();

  // Keyboard shortcut handlers (F4: New, F5: Save, F3: Preview, F6: Refresh)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F4') {
        e.preventDefault();
        newVoucher();
      } else if (e.key === 'F5') {
        e.preventDefault();
        const saveBtn = document.querySelector('.btn-save') as HTMLButtonElement;
        if (saveBtn) saveBtn.click();
      } else if (e.key === 'F3') {
        e.preventDefault();
        const previewBtn = document.querySelector('.btn-preview') as HTMLButtonElement;
        if (previewBtn) previewBtn.click();
      } else if (e.key === 'F6') {
        e.preventDefault();
        window.location.reload();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [newVoucher]);

  return (
    <div className="pos-app">
      <Toolbar />
      <HeaderFilters />
      <div className="pos-body">
        <div className="pos-left-area">
          <ConsigneeSection />
          <ArticleSection />
          <LineItemsGrid />
        </div>
        <RightPanel />
      </div>
      <StatusBar />
    </div>
  );
};

export default App;
