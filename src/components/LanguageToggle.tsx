import { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'LN', name: 'Lingala', flag: '🌍' },
    { code: 'ZU', name: 'isiZulu', flag: '🇿🇦' },
    { code: 'XH', name: 'isiXhosa', flag: '🇿🇦' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
    // Future: Implement actual translation logic here
    console.log(`Language changed to: ${langCode}`);
  };

  return (
    <div className="language-toggle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-toggle-button"
        aria-label="Change language"
      >
        <Globe className="w-6 h-6" />
        <span className="language-code">{currentLanguage}</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;