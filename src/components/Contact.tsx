import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, MessageCircleIcon, Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: language,
          source: 'Brasa Global China Connect Website'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Toast de sucesso com animação
        toast.success(
          language === 'pt' ? '🎉 Mensagem enviada com sucesso!' :
          language === 'en' ? '🎉 Message sent successfully!' :
          '🎉 消息发送成功！',
          {
            duration: 5000,
            position: 'top-center',
            style: {
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600'
            }
          }
        );
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Toast de erro com animação
      toast.error(
        language === 'pt' ? '❌ Erro ao enviar mensagem. Tente novamente.' :
        language === 'en' ? '❌ Error sending message. Please try again.' :
        '❌ 发送消息时出错。请重试。',
        {
          duration: 5000,
          position: 'top-center',
          style: {
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600'
          }
        }
      );
    } finally {
      setIsSubmitting(false);
    }
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WeChat
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <div className="text-center">
                      <img
                        src="/lovable-uploads/29eb303e-4e10-4598-877b-f75237f3ecee.png"
                        alt="Código QR do WeChat - Brasa Global Meats"
                        loading="lazy"
                        className="mx-auto rounded-md shadow-md w-80 h-auto object-contain"
                      />
                      <p className="mt-4 text-sm text-muted-foreground">Escaneie o QR code no WeChat para iniciar a conversa.</p>
                    </div>
                  </DialogContent>
                </Dialog>
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
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      {t('contact.form.name')} *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                      placeholder="Seu nome completo" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      {t('contact.form.email')} *
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                      placeholder="seu@email.com" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    {t('contact.form.company')}
                  </label>
                  <Input 
                    type="text" 
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                    placeholder="Nome da sua empresa" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea 
                    required 
                    rows={6} 
                    className="w-full resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                    placeholder="Descreva suas necessidades de importação, volumes desejados, especificações dos produtos..." 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                  />
                </div>

                                 <Button 
                   type="submit" 
                   className="w-full bg-gradient-primary hover:bg-primary-hover py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:scale-100 disabled:shadow-none" 
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                       <span>
                         {language === 'pt' ? 'Enviando...' :
                          language === 'en' ? 'Sending...' :
                          '发送中...'}
                       </span>
                     </>
                   ) : (
                     <>
                       <Send className="mr-3 h-5 w-5" />
                       {t('contact.form.submit')}
                     </>
                   )}
                 </Button>
                                 {submitStatus === 'success' && (
                   <div className="flex items-center justify-center text-green-600 mt-4 p-4 bg-green-50 rounded-lg border border-green-200 animate-in slide-in-from-top-2 duration-300">
                     <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                     <span className="font-medium">
                       {t('contact.form.success')}
                     </span>
                   </div>
                 )}
                 {submitStatus === 'error' && (
                   <div className="flex items-center justify-center text-red-600 mt-4 p-4 bg-red-50 rounded-lg border border-red-200 animate-in slide-in-from-top-2 duration-300">
                     <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
                     <span className="font-medium">
                       {t('contact.form.error')}
                     </span>
                   </div>
                 )}
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
