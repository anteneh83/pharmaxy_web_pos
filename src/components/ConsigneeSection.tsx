import React, { useState } from 'react';
import { usePOSStore } from '../store/posStore';
import { mockPatients, mockDoctors, mockInsuranceProviders } from '../data/mockData';

export const ConsigneeSection: React.FC = () => {
  const { consignees, updateConsignee, selectPatient } = usePOSStore();
  const [patientModalOpen, setPatientModalOpen] = useState(false);

  const handlePatientSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pId = e.target.value;
    const patient = mockPatients.find((p) => p.id === pId);
    if (patient) {
      selectPatient(patient);
    }
  };

  const handleDoctorSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dId = e.target.value;
    const doctor = mockDoctors.find((d) => d.id === dId);
    if (doctor) {
      updateConsignee(1, 'value', `${doctor.name} (${doctor.specialty})`);
    }
  };

  const handleInsuranceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const insId = e.target.value;
    const ins = mockInsuranceProviders.find((i) => i.id === insId);
    if (ins) {
      updateConsignee(2, 'value', `${ins.name} [Coverage: ${ins.coveragePercent}%]`);
    }
  };

  return (
    <div className="consignee-card">
      <div className="consignee-grid">
        {/* Consignee 1: Patient */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[0].label} (Patient)</div>
          <div className="consignee-input-group">
            <select
              className="pos-select"
              style={{ width: '100%' }}
              onChange={handlePatientSelect}
              defaultValue="P001"
            >
              {mockPatients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.fullName} — {p.phone} (ID: {p.id}) {p.allergies.length > 0 ? `⚠️ Allergies: ${p.allergies.join(', ')}` : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[0].unit}
            onChange={(e) => updateConsignee(0, 'unit', e.target.value)}
          >
            {consignees[0].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" onClick={() => setPatientModalOpen(true)} title="Search Patient Database">...</button>
          </div>
        </div>

        {/* Consignee 2: Prescribing Doctor */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[1].label} (Doctor)</div>
          <div className="consignee-input-group">
            <select
              className="pos-select"
              style={{ width: '100%' }}
              onChange={handleDoctorSelect}
              defaultValue="DR001"
            >
              {mockDoctors.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} — {d.specialty} ({d.hospital})
                </option>
              ))}
            </select>
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[1].unit}
            onChange={(e) => updateConsignee(1, 'unit', e.target.value)}
          >
            {consignees[1].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" onClick={() => alert('Doctor License & NPI Verified')} title="Doctor Info">...</button>
          </div>
        </div>

        {/* Consignee 3: Insurance */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[2].label} (Insurance)</div>
          <div className="consignee-input-group">
            <select
              className="pos-select"
              style={{ width: '100%' }}
              onChange={handleInsuranceSelect}
              defaultValue="INS001"
            >
              {mockInsuranceProviders.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.name} — Plan: {i.planType} ({i.coveragePercent}% Coverage)
                </option>
              ))}
            </select>
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[2].unit}
            onChange={(e) => updateConsignee(2, 'unit', e.target.value)}
          >
            {consignees[2].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" onClick={() => alert('Insurance Claim Eligibility: Verified Active')} title="Insurance Eligibility">...</button>
          </div>
        </div>

        {/* Consignee 4: Pharmacy Dispensing Unit */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[3].label} (Dispensing)</div>
          <div className="consignee-input-group">
            <input
              type="text"
              className="pos-input"
              style={{ width: '100%' }}
              value={consignees[3].value}
              onChange={(e) => updateConsignee(3, 'value', e.target.value)}
            />
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[3].unit}
            onChange={(e) => updateConsignee(3, 'unit', e.target.value)}
          >
            {consignees[3].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" title="Unit Details">...</button>
          </div>
        </div>

        {/* Consignee 5: Referring Doctor / Clinic */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[4].label} (Ref Dr.)</div>
          <div className="consignee-input-group">
            <input
              type="text"
              className="pos-input"
              style={{ width: '100%' }}
              placeholder="Referring Clinic / Walk-in"
              value={consignees[4].value}
              onChange={(e) => updateConsignee(4, 'value', e.target.value)}
            />
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[4].unit}
            onChange={(e) => updateConsignee(4, 'unit', e.target.value)}
          >
            {consignees[4].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" title="Reference">...</button>
          </div>
        </div>

        {/* Consignee 6: Caregiver / Guardian */}
        <div className="consignee-row">
          <div className="consignee-label">{consignees[5].label} (Caregiver)</div>
          <div className="consignee-input-group">
            <input
              type="text"
              className="pos-input"
              style={{ width: '100%' }}
              placeholder="Caregiver Name / Contact"
              value={consignees[5].value}
              onChange={(e) => updateConsignee(5, 'value', e.target.value)}
            />
          </div>
          <div className="consignee-label" style={{ textAlign: 'right', paddingRight: '4px' }}>Consignee Unit</div>
          <select
            className="pos-select"
            value={consignees[5].unit}
            onChange={(e) => updateConsignee(5, 'unit', e.target.value)}
          >
            {consignees[5].unitOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <div className="consignee-unit-bar">
            <button className="consignee-dots-btn" title="Caregiver Info">...</button>
          </div>
        </div>
      </div>

      {/* Patient Database Quick Search Modal */}
      {patientModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <div style={{ background: '#e6ecf0', border: '1px solid #0284c7', borderRadius: '8px', padding: '20px', width: '500px', color: '#0f172a' }}>
            <h3 style={{ color: '#0284c7', marginBottom: '10px' }}>Patient Database Directory</h3>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {mockPatients.map(p => (
                <div
                  key={p.id}
                  onClick={() => { selectPatient(p); setPatientModalOpen(false); }}
                  style={{
                    padding: '8px', borderBottom: '1px solid #cbd5e1', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', color: '#0f172a'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#dbeafe')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div>
                    <strong>{p.fullName}</strong> ({p.gender}, {p.dateOfBirth})
                    <br />
                    <small style={{ color: '#475569' }}>Phone: {p.phone} | Ins: {p.insuranceProvider || 'None'}</small>
                  </div>
                  <button className="btn-pos-action">Select</button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPatientModalOpen(false)}
              className="btn-pos-action"
              style={{ marginTop: '12px', width: '100%' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
