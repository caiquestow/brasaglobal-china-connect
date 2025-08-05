import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';

const languages = [
  { code: 'pt' as Language, name: 'PT', flag: '🇧🇷' },
  { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' }
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="h-9 px-3 text-sm font-medium"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </Button>
      ))}
    </div>
  );
};