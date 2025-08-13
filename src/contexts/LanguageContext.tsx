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
    tagline: {
      pt: 'Carnes Brasileiras Premium',
      en: 'Premium Brazilian Meats',
      zh: '优质巴西肉类'
    },
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
    },
    valuesList: {
      quality: {
        pt: 'Qualidade',
        en: 'Quality',
        zh: '质量'
      },
      qualityDesc: {
        pt: 'Compromisso com excelência',
        en: 'Commitment to excellence',
        zh: '对卓越的承诺'
      },
      transparency: {
        pt: 'Transparência',
        en: 'Transparency',
        zh: '透明度'
      },
      transparencyDesc: {
        pt: 'Relacionamentos honestos',
        en: 'Honest relationships',
        zh: '诚实的关系'
      },
      sustainability: {
        pt: 'Sustentabilidade',
        en: 'Sustainability',
        zh: '可持续性'
      },
      sustainabilityDesc: {
        pt: 'Práticas responsáveis',
        en: 'Responsible practices',
        zh: '负责任的做法'
      },
      reliability: {
        pt: 'Confiabilidade',
        en: 'Reliability',
        zh: '可靠性'
      },
      reliabilityDesc: {
        pt: 'Entregas garantidas',
        en: 'Guaranteed deliveries',
        zh: '保证交付'
      }
    }
  },
  products: {
    title: {
      pt: 'Nossos Produtos Premium',
      en: 'Our Premium Products',
      zh: '我们的优质产品'
    },
    subtitle: {
      pt: 'Oferecemos uma seleção premium de carnes brasileiras, processadas com os mais altos padrões de qualidade e segurança para o mercado internacional.',
      en: 'We offer a premium selection of Brazilian meats, processed with the highest standards of quality and safety for the international market.',
      zh: '我们提供优质的巴西肉类选择，按照最高的质量和安全标准为国际市场加工。'
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
    },
    features: {
      beef1: { pt: 'Cortes Nobres', en: 'Premium Cuts', zh: '优质切割' },
      beef2: { pt: 'Certificação SIF', en: 'SIF Certification', zh: 'SIF认证' },
      beef3: { pt: 'Rastreabilidade', en: 'Traceability', zh: '可追溯性' },
      beef4: { pt: 'Qualidade Premium', en: 'Premium Quality', zh: '优质品质' },
      chicken1: { pt: 'Processamento Moderno', en: 'Modern Processing', zh: '现代加工' },
      chicken2: { pt: 'Controle HACCP', en: 'HACCP Control', zh: 'HACCP控制' },
      chicken3: { pt: 'Frescor Garantido', en: 'Guaranteed Freshness', zh: '保证新鲜' },
      chicken4: { pt: 'Padrão Internacional', en: 'International Standard', zh: '国际标准' },
      pork1: { pt: 'Criação Sustentável', en: 'Sustainable Farming', zh: '可持续养殖' },
      pork2: { pt: 'Bem-Estar Animal', en: 'Animal Welfare', zh: '动物福利' },
      pork3: { pt: 'Inspeção Rigorosa', en: 'Rigorous Inspection', zh: '严格检验' },
      pork4: { pt: 'Exportação Certificada', en: 'Certified Export', zh: '认证出口' }
    },
    quote: {
      pt: 'Solicitar Cotação',
      en: 'Request Quote',
      zh: '索取报价'
    },
    certifications: {
      title: {
        pt: 'Certificações e Qualidade Garantida',
        en: 'Certifications and Guaranteed Quality',
        zh: '认证和质量保证'
      },
      description: {
        pt: 'Nossos produtos atendem aos mais rigorosos padrões internacionais de qualidade e segurança alimentar.',
        en: 'Our products meet the most rigorous international standards of quality and food safety.',
        zh: '我们的产品符合最严格的国际质量和食品安全标准。'
      },
      certified: {
        pt: 'Certificado',
        en: 'Certified',
        zh: '已认证'
      }
    }
  },
  contact: {
    title: {
      pt: 'Entre em Contato',
      en: 'Get in Touch',
      zh: '联系我们'
    },
    subtitle: {
      pt: 'Entre em contato conosco para discutir suas necessidades de importação. Nossa equipe especializada está pronta para atendê-lo.',
      en: 'Contact us to discuss your import needs. Our specialized team is ready to serve you.',
      zh: '联系我们讨论您的进口需求。我们的专业团队随时为您服务。'
    },
    form: {
      title: {
        pt: 'Envie sua Mensagem',
        en: 'Send Your Message',
        zh: '发送您的信息'
      },
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
      ready: {
        title: {
          pt: 'Pronto para Exportar?',
          en: 'Ready to Export?',
          zh: '准备出口了吗？'
        },
        description: {
          pt: 'Nossa equipe especializada está preparada para discutir suas necessidades específicas e criar uma solução personalizada para sua empresa.',
          en: 'Our specialized team is prepared to discuss your specific needs and create a customized solution for your company.',
          zh: '我们的专业团队准备讨论您的具体需求，为您的公司创建定制解决方案。'
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
    description: {
      pt: 'Especialistas em exportação de carnes brasileiras premium para o mercado chinês. Qualidade, segurança e confiabilidade em cada operação.',
      en: 'Specialists in exporting premium Brazilian meats to the Chinese market. Quality, safety and reliability in every operation.',
      zh: '专业向中国市场出口优质巴西肉类。每一次操作都保证质量、安全和可靠性。'
    },
    navigation: {
      pt: 'Navegação',
      en: 'Navigation',
      zh: '导航'
    },
    ourProducts: {
      pt: 'Nossos Produtos',
      en: 'Our Products',
      zh: '我们的产品'
    },
    website: {
      pt: 'brasaglobalmeats.com',
      en: 'brasaglobalmeats.com',
      zh: 'brasaglobalmeats.com'
    },
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