import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import type { Language } from '../../../types';

function getInitialLang(propLang?: Language): Language {
  if (propLang) return propLang;
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/en')) return 'en';
  }
  return 'es';
}

export function useLanguageDetection(propLang?: Language): Language {
  const [detectedLang, setDetectedLang] = useState<Language>(() => getInitialLang(propLang));
  
  // Always call useLanguage hook (no conditional calls)
  const languageContext = useLanguage();
  
  useEffect(() => {
    let finalLang: Language = 'es';
    
    // Priority: prop > context > URL detection > default
    if (propLang) {
      finalLang = propLang;
    } else if (languageContext?.lang) {
      finalLang = languageContext.lang;
    } else if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/en')) {
        finalLang = 'en';
      } else if (path.startsWith('/es')) {
        finalLang = 'es';
      }
    }
    
    setDetectedLang(finalLang);
  }, [propLang, languageContext?.lang]);
  
  return detectedLang;
}