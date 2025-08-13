import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Shield, Globe, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              {t('hero.tagline')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-4 text-lg group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="accent"
              onClick={() => scrollToSection('about')}
              className="font-semibold px-8 py-4 text-lg"
            >
              {t('nav.about')}
            </Button>
          </div>

          {/* Quality Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{t('hero.quality.certification')}</p>
                <p className="text-sm text-white/70">{t('hero.quality.certificationDesc')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{t('hero.quality.export')}</p>
                <p className="text-sm text-white/70">{t('hero.quality.exportDesc')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/20 rounded-lg">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{t('hero.quality.premium')}</p>
                <p className="text-sm text-white/70">{t('hero.quality.premiumDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};