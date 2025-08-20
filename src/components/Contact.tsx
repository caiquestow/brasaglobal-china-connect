import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, MessageCircleIcon, Copy, Check } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleWeChatClick = () => {
    const wechatInfo = "Brasa Global Meats - Faça leitura do código QR para me adicionar como amigo.";
    navigator.clipboard.writeText(wechatInfo).then(() => {
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2000);
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.cards.address.title'),
      content: t('contact.info.address'),
      secondary: t('contact.cards.address.subtitle')
    },
    {
      icon: Phone,
      title: t('contact.cards.phone.title'),
      content: t('contact.info.phone'),
      secondary: t('contact.cards.phone.subtitle')
    },
    {
      icon: Mail,
      title: t('contact.cards.email.title'),
      content: t('contact.info.email'),
      secondary: t('contact.cards.email.subtitle')
    },
    {
      icon: Clock,
      title: t('contact.cards.schedule.title'),
      content: t('contact.cards.schedule.content'),
      secondary: t('contact.cards.schedule.subtitle')
    }
  ];

  return <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        {/* Ready to Import/Export Section */}
        <div className="mb-16 flex justify-center">
          <Card className="bg-gradient-accent text-accent-foreground max-w-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                {t('contact.ready.title')}
              </h3>
              <p className="mb-6 opacity-90">
                {t('contact.ready.description')}
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  onClick={() => window.open('https://wa.me/5511967388266', '_blank')}
                >
                  <MessageCircleIcon className="h-5 w-5" />
                  WhatsApp
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                  onClick={handleWeChatClick}
                >
                  {copiedWeChat ? <Check className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
                  WeChat {copiedWeChat ? '(Copiado!)' : ''}
                </Button>
              </div>
              <div className="mt-4 text-sm opacity-75">
                <p>WeChat: Escaneie o QR code para adicionar</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {t('contact.form.title')}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <Input type="text" required className="w-full" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input type="email" required className="w-full" placeholder="seu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.company')}
                  </label>
                  <Input type="text" className="w-full" placeholder="Nome da sua empresa" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea required rows={6} className="w-full resize-none" placeholder="Descreva suas necessidades de importação, volumes desejados, especificações dos produtos..." />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:bg-primary-hover py-3 text-lg font-semibold">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

          </div>
        </div>
      </div>
    </section>;
};
