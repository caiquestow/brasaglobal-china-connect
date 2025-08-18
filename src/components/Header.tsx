import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import brasaLogo from '/lovable-uploads/ded15c01-0b17-47f5-81b1-d4b26d9a7732.png';

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={brasaLogo} 
              alt="Brasa Global Meats" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.home')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.about')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.products')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.contact')}
            </Button>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:bg-primary-hover transition-smooth"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};