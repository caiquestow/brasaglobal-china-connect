import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import premiumBeef from '@/assets/premium-beef.jpg';
import premiumChicken from '@/assets/premium-chicken.jpg';
import premiumPork from '@/assets/premium-pork.jpg';
export const Products = () => {
  const {
    t
  } = useLanguage();
  const products = [{
    title: t('products.beef'),
    description: t('products.beefDesc'),
    image: premiumBeef,
    features: [t('products.features.beef1'), t('products.features.beef2'), t('products.features.beef3'), t('products.features.beef4')]
  }, {
    title: t('products.chicken'),
    description: t('products.chickenDesc'),
    image: premiumChicken,
    features: [t('products.features.chicken1'), t('products.features.chicken2'), t('products.features.chicken3'), t('products.features.chicken4')]
  }, {
    title: t('products.pork'),
    description: t('products.porkDesc'),
    image: premiumPork,
    features: [t('products.features.pork1'), t('products.features.pork2'), t('products.features.pork3'), t('products.features.pork4')]
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('products.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Premium
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={scrollToContact} className="w-full bg-gradient-primary hover:bg-primary-hover group">
                  {t('products.quote')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Quality Certifications */}
        
      </div>
    </section>;
};