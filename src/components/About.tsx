import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart, Truck, Users, Leaf } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('about.valuesList.quality'), desc: t('about.valuesList.qualityDesc') },
    { icon: Users, title: t('about.valuesList.transparency'), desc: t('about.valuesList.transparencyDesc') },
    { icon: Leaf, title: t('about.valuesList.sustainability'), desc: t('about.valuesList.sustainabilityDesc') },
    { icon: Truck, title: t('about.valuesList.reliability'), desc: t('about.valuesList.reliabilityDesc') }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {t('about.mission')}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.missionText')}
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {t('about.vision')}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.visionText')}
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {t('about.values')}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.valuesText')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};