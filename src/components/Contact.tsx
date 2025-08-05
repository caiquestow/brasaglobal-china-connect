import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: t('contact.info.address'),
      secondary: 'Sede corporativa'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: t('contact.info.phone'),
      secondary: 'Atendimento comercial'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: t('contact.info.email'),
      secondary: 'Resposta em 24h'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 8h às 18h',
      secondary: 'Horário de Brasília'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Entre em contato conosco para discutir suas necessidades de importação. Nossa equipe especializada está pronta para atendê-lo.
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
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
                  Envie sua Mensagem
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.company')}
                  </label>
                  <Input 
                    type="text" 
                    className="w-full"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea 
                    required 
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Descreva suas necessidades de importação, volumes desejados, especificações dos produtos..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:bg-primary-hover py-3 text-lg font-semibold"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
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
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Pronto para Exportar?
                </h3>
                <p className="mb-6 opacity-90">
                  Nossa equipe especializada está preparada para discutir suas necessidades específicas e criar uma solução personalizada para sua empresa.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm opacity-80">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm opacity-80">Exportações Realizadas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm opacity-80">Satisfação dos Clientes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};