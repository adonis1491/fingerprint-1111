import React, { useState } from 'react';
import OpenStreetMapComponent from './OpenStreetMapComponent';
import RiskLevelComponent from './RiskLevelComponent';
import LanguageSelector from './LanguageSelector';

const ParentComponent = () => {
  const location = { lat: 25.0330, lng: 121.5654 }; // 示例位置
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 預設語言
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'es', name: 'Español' },
    { code: 'ja4', name: '日本語' }, // JA4 語系
  ];

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    // 在這裡添加切換語言的邏輯
  };

  return (
    <div style={{ position: 'relative', minHeight: '700px' }}>
      <h1>我的地圖</h1>
      <LanguageSelector
        languages={languages}
        currentLanguage={currentLanguage}
        onChange={handleLanguageChange}
      />
      <OpenStreetMapComponent location={location} />
      <RiskLevelComponent /> {/* 使用風險評級組件 */}
      <div class="ja4-element">
        JA4=tTLS 13d1005...orted_groups
      </div>
    </div>
  );
};

export default ParentComponent; 