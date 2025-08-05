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
    title: Translation;
    subtitle: Translation;
    cta: Translation;
  };
  about: {
    title: Translation;
    mission: Translation;
    vision: Translation;
    values: Translation;
    missionText: Translation;
    visionText: Translation;
    valuesText: Translation;
  };
  products: {
    title: Translation;
    beef: Translation;
    chicken: Translation;
    pork: Translation;
    beefDesc: Translation;
    chickenDesc: Translation;
    porkDesc: Translation;
  };
  contact: {
    title: Translation;
    form: {
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
    copyright: Translation;
    rights: Translation;
  };
}