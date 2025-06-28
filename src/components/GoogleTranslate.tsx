import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    // Define the initialization function
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'ln,fr,xh,zu,af',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="fixed bottom-4 left-4 z-50 scale-90 bg-white/80 rounded-md shadow-md px-2 py-1"
      style={{ 
        fontSize: '12px',
        fontFamily: 'arial, sans-serif'
      }}
    />
  );
};

export default GoogleTranslate;