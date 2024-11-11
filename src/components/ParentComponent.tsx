import React from 'react';
import OpenStreetMapComponent from './OpenStreetMapComponent';
import RiskLevelComponent from './RiskLevelComponent';

const ParentComponent = () => {
  const location = { lat: 25.0330, lng: 121.5654 }; // 示例位置

  return (
    <div style={{ position: 'relative', minHeight: '700px' }}>
      <h1>我的地圖</h1>
      <OpenStreetMapComponent location={location} />
      <RiskLevelComponent /> {/* 使用風險評級組件 */}
    </div>
  );
};

export default ParentComponent; 