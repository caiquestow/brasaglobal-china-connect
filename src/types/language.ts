export type Language = 'pt' | 'en' | 'zh';

export interface Translation {
  pt: string;
  en: string;
  zh: string;
}

export interface TranslationData {
  nav: {
    home: Translation;
    about: Translation;
    products: Translation;
    contact: Translation;
  };
  hero: {
    tagline: Translation;
    title: Translation;
    subtitle: Translation;
    cta: Translation;
    quality: {
      certification: Translation;
      certificationDesc: Translation;
      export: Translation;
      exportDesc: Translation;
      premium: Translation;
      premiumDesc: Translation;
    };
  };
  about: {
    title: Translation;
    mission: Translation;
    vision: Translation;
    values: Translation;
    missionText: Translation;
    visionText: Translation;
    valuesText: Translation;
    valuesList: {
      quality: Translation;
      qualityDesc: Translation;
      transparency: Translation;
      transparencyDesc: Translation;
      sustainability: Translation;
      sustainabilityDesc: Translation;
      reliability: Translation;
      reliabilityDesc: Translation;
    };
  };
  products: {
    title: Translation;
    subtitle: Translation;
    beef: Translation;
    chicken: Translation;
    pork: Translation;
    beefDesc: Translation;
    chickenDesc: Translation;
    porkDesc: Translation;
    features: {
      beef1: Translation;
      beef2: Translation;
      beef3: Translation;
      beef4: Translation;
      chicken1: Translation;
      chicken2: Translation;
      chicken3: Translation;
      chicken4: Translation;
      pork1: Translation;
      pork2: Translation;
      pork3: Translation;
      pork4: Translation;
    };
    quote: Translation;
    certifications: {
      title: Translation;
      description: Translation;
      certified: Translation;
    };
  };
  contact: {
    title: Translation;
    subtitle: Translation;
    form: {
      title: Translation;
      name: Translation;
      email: Translation;
      company: Translation;
      message: Translation;
      submit: Translation;
    };
    info: {
      address: Translation;
      phone: Translation;
      email: Translation;
    };
  };
  footer: {
    description: Translation;
    navigation: Translation;
    ourProducts: Translation;
    website: Translation;
    copyright: Translation;
    rights: Translation;
  };
}