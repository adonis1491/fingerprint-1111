import React from 'react';

interface Props {
  languages: { code: string; name: string }[];
  currentLanguage: string;
  onChange: (lang: string) => void;
}

const LanguageSelector: React.FC<Props> = ({ languages, currentLanguage, onChange }) => {
  return (
    <select
      value={currentLanguage}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: '8px', borderRadius: '4px' }}
    >
      {languages.map((lang) => (
        // 隱藏 JA4 語系
        lang.code !== 'ja4' && (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        )
      ))}
    </select>
  );
};

export default LanguageSelector; 