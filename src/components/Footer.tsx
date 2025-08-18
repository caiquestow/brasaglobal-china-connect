import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import brasaLogo from '/lovable-uploads/ded15c01-0b17-47f5-81b1-d4b26d9a7732.png';
export const Footer = () => {
  const {
    t
  } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={brasaLogo} alt="Brasa Global Meats" className="h-16 w-auto mb-6" />
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">{t('contact.info.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-sm">{t('footer.website')}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.navigation')}</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.products')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.ourProducts')}</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">{t('products.beef')}</li>
              <li className="text-primary-foreground/80">{t('products.chicken')}</li>
              <li className="text-primary-foreground/80">{t('products.pork')}</li>
              
            </ul>
          </div>
        </div>

        {/* Quality Certifications */}
        

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};