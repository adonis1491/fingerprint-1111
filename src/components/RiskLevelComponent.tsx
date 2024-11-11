import React from 'react';

const RiskLevelComponent: React.FC = () => {
  const riskLevel = "低"; // 預設風險評級

  return (
    <div style={{
      position: 'absolute',
      right: '20px',
      bottom: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000,
    }}>
      <h4 style={{ margin: 0 }}>風險評級</h4>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{riskLevel}</p>
    </div>
  );
};

export default RiskLevelComponent; 