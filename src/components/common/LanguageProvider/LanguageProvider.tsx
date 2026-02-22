import React, { createContext, useContext, type ReactNode } from 'react';
import type { Language } from '../../../types';

interface LanguageContextType {
  lang: Language;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
  lang: Language;
}

export function LanguageProvider({ children, lang }: LanguageProviderProps) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  
  // Fallback: detect language from URL or use default
  if (!context) {
    const detectLanguage = (): Language => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        if (path.startsWith('/en')) return 'en';
        if (path.startsWith('/es')) return 'es';
      }
      return 'es'; // default fallback
    };
    
    return { lang: detectLanguage() };
  }
  
  return context;
}