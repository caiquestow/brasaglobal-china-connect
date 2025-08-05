import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import brasaLogo from '@/assets/brasa-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src={brasaLogo} 
              alt="Brasa Global Meats" 
              className="h-16 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Especialistas em exportação de carnes brasileiras premium para o mercado chinês. 
              Qualidade, segurança e confiabilidade em cada operação.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm">São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">+55 11 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm">contato@brasaglobalmeats.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-sm">brasaglobalmeats.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.products')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Produtos</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">{t('products.beef')}</li>
              <li className="text-primary-foreground/80">{t('products.chicken')}</li>
              <li className="text-primary-foreground/80">{t('products.pork')}</li>
              <li className="text-primary-foreground/80">Certificações SIF</li>
            </ul>
          </div>
        </div>

        {/* Quality Certifications */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Certificações e Qualidade</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {['SIF - Serviço de Inspeção Federal', 'HACCP - Análise de Perigos', 'ISO 22000 - Segurança Alimentar', 'Halal - Certificação Halal'].map((cert, index) => (
                <div key={index} className="text-sm text-primary-foreground/80 text-center">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

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
    </footer>
  );
};