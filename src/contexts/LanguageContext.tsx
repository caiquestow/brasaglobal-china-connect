import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, TranslationData } from '@/types/language';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: TranslationData = {
  nav: {
    home: {
      pt: 'Início',
      en: 'Home',
      zh: '首页'
    },
    about: {
      pt: 'Sobre Nós',
      en: 'About Us',
      zh: '关于我们'
    },
    products: {
      pt: 'Nossos Produtos',
      en: 'Our Products',
      zh: '我们的产品'
    },
    contact: {
      pt: 'Contato',
      en: 'Contact',
      zh: '联系我们'
    }
  },
  hero: {
    title: {
      pt: 'Exportadores Premium de Carnes Brasileiras para a China',
      en: 'Premium Brazilian Meat Exporters to China',
      zh: '向中国出口优质巴西肉类的专业公司'
    },
    subtitle: {
      pt: 'Conectando a qualidade excepcional das carnes brasileiras ao mercado chinês com segurança, confiabilidade e excelência.',
      en: 'Connecting the exceptional quality of Brazilian meats to the Chinese market with safety, reliability and excellence.',
      zh: '以安全、可靠和卓越的品质将巴西优质肉类连接到中国市场。'
    },
      cta: {
        pt: 'Conheça Nossos Produtos',
        en: 'Discover Our Products',
        zh: '了解我们的产品'
      },
      quality: {
        certification: {
          pt: 'Certificação Internacional',
          en: 'International Certification',
          zh: '国际认证'
        },
        certificationDesc: {
          pt: 'Padrões globais de qualidade',
          en: 'Global quality standards',
          zh: '全球质量标准'
        },
        export: {
          pt: 'Exportação Especializada',
          en: 'Specialized Export',
          zh: '专业出口'
        },
        exportDesc: {
          pt: 'Foco no mercado chinês',
          en: 'Focus on Chinese market',
          zh: '专注中国市场'
        },
        premium: {
          pt: 'Qualidade Premium',
          en: 'Premium Quality',
          zh: '优质品质'
        },
        premiumDesc: {
          pt: 'Carnes brasileiras selecionadas',
          en: 'Selected Brazilian meats',
          zh: '精选巴西肉类'
        }
      }
  },
  about: {
    title: {
      pt: 'Sobre a Brasa Global Meats',
      en: 'About Brasa Global Meats',
      zh: '关于Brasa Global Meats'
    },
    mission: {
      pt: 'Nossa Missão',
      en: 'Our Mission',
      zh: '我们的使命'
    },
    vision: {
      pt: 'Nossa Visão',
      en: 'Our Vision',
      zh: '我们的愿景'
    },
    values: {
      pt: 'Nossos Valores',
      en: 'Our Values',
      zh: '我们的价值观'
    },
    missionText: {
      pt: 'Exportar carnes brasileiras de alta qualidade para a China, garantindo segurança alimentar, sustentabilidade e satisfação total de nossos parceiros.',
      en: 'To export high-quality Brazilian meats to China, ensuring food safety, sustainability and total satisfaction of our partners.',
      zh: '向中国出口高质量的巴西肉类，确保食品安全、可持续性和合作伙伴的完全满意。'
    },
    visionText: {
      pt: 'Ser a principal ponte entre os melhores produtores brasileiros e o mercado chinês, reconhecida pela excelência e confiabilidade.',
      en: 'To be the main bridge between the best Brazilian producers and the Chinese market, recognized for excellence and reliability.',
      zh: '成为巴西最佳生产商与中国市场之间的主要桥梁，以卓越和可靠性著称。'
    },
    valuesText: {
      pt: 'Qualidade, Transparência, Sustentabilidade, Inovação e Compromisso com nossos parceiros.',
      en: 'Quality, Transparency, Sustainability, Innovation and Commitment to our partners.',
      zh: '质量、透明度、可持续性、创新和对合作伙伴的承诺。'
    }
  },
  products: {
    title: {
      pt: 'Nossos Produtos Premium',
      en: 'Our Premium Products',
      zh: '我们的优质产品'
    },
    beef: {
      pt: 'Carne Bovina',
      en: 'Beef',
      zh: '牛肉'
    },
    chicken: {
      pt: 'Frango',
      en: 'Chicken',
      zh: '鸡肉'
    },
    pork: {
      pt: 'Suíno',
      en: 'Pork',
      zh: '猪肉'
    },
    beefDesc: {
      pt: 'Cortes nobres de gado criado em pastagens brasileiras, com certificação internacional de qualidade.',
      en: 'Premium cuts from cattle raised in Brazilian pastures, with international quality certification.',
      zh: '来自巴西牧场饲养的牛群的优质切割肉，具有国际质量认证。'
    },
    chickenDesc: {
      pt: 'Frango processado com os mais altos padrões de qualidade e segurança alimentar.',
      en: 'Chicken processed with the highest standards of quality and food safety.',
      zh: '按照最高质量和食品安全标准加工的鸡肉。'
    },
    porkDesc: {
      pt: 'Carne suína premium de criação sustentável, atendendo rigorosos controles sanitários.',
      en: 'Premium pork from sustainable farming, meeting strict sanitary controls.',
      zh: '来自可持续养殖的优质猪肉，符合严格的卫生控制标准。'
    }
  },
  contact: {
    title: {
      pt: 'Entre em Contato',
      en: 'Get in Touch',
      zh: '联系我们'
    },
    form: {
      name: {
        pt: 'Nome',
        en: 'Name',
        zh: '姓名'
      },
      email: {
        pt: 'E-mail',
        en: 'Email',
        zh: '电子邮件'
      },
      company: {
        pt: 'Empresa',
        en: 'Company',
        zh: '公司'
      },
      message: {
        pt: 'Mensagem',
        en: 'Message',
        zh: '信息'
      },
      submit: {
        pt: 'Enviar Mensagem',
        en: 'Send Message',
        zh: '发送信息'
      }
    },
    info: {
      address: {
        pt: 'São Paulo, Brasil',
        en: 'São Paulo, Brazil',
        zh: '巴西圣保罗'
      },
      phone: {
        pt: '+55 11 9999-9999',
        en: '+55 11 9999-9999',
        zh: '+55 11 9999-9999'
      },
      email: {
        pt: 'contato@brasaglobalmeats.com',
        en: 'contact@brasaglobalmeats.com',
        zh: 'contact@brasaglobalmeats.com'
      }
    }
  },
  footer: {
    copyright: {
      pt: '© 2024 Brasa Global Meats. Todos os direitos reservados.',
      en: '© 2024 Brasa Global Meats. All rights reserved.',
      zh: '© 2024 Brasa Global Meats. 版权所有。'
    },
    rights: {
      pt: 'Qualidade garantida | Certificações internacionais',
      en: 'Quality guaranteed | International certifications',
      zh: '质量保证 | 国际认证'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
      current = current?.[k];
    }
    
    return current?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};