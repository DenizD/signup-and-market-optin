
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlanCardProps } from './types';
import { ModuleSelector } from './ModuleSelector';
import { FeatureSection } from './FeatureSection';

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  language,
  isPopular,
  starterModule,
  onModuleChange,
  expandedFeatures,
  onToggleFeatures
}) => {
  const formatPrice = (price: number | null) => {
    if (price === null) return language === 'de' ? 'Individuell' : 'Custom';
    return `${price.toLocaleString('en-US')}€`;
  };

  return (
    <div className="relative flex">
      <Card className={`
        w-full grid grid-rows-[200px_120px_auto_1fr_80px] 
        transition-all duration-300 hover:shadow-lg
        ${isPopular 
          ? 'border-2 border-primary shadow-lg bg-primary/5' 
          : 'border border-border hover:border-primary/20'
        }
      `}>
        {/* Popular Badge */}
        {isPopular && (
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
            {language === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}
          </Badge>
        )}

        {/* Block 1: Tariff Overview (Fixed Height: 200px) */}
        <div className="p-6 text-center border-b">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            {language === 'de' ? plan.subtitle : plan.subtitleEN}
          </div>
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {language === 'de' ? plan.description : plan.descriptionEN}
          </p>
          <div className="text-3xl font-bold text-primary mb-1">
            {formatPrice(plan.monthlyPrice)}
          </div>
          {plan.monthlyPrice && (
            <div className="text-sm text-muted-foreground">
              {language === 'de' ? 'pro Monat' : 'per month'}
            </div>
          )}
        </div>

        {/* Block 2: Module/Info Area (Fixed Height: 120px) */}
        <div className="px-6 py-4 border-b bg-muted/20 flex items-center justify-center">
          {plan.isStarterOption ? (
            <ModuleSelector
              selectedModule={starterModule}
              onModuleChange={onModuleChange}
              language={language}
            />
          ) : (
            <div className="text-center">
              <div className="text-sm font-semibold text-primary">
                {plan.id === 'advanced' 
                  ? (language === 'de' ? 'Alle Starter Features enthalten' : 'All Starter features included')
                  : (language === 'de' ? 'Alle Advanced Features enthalten' : 'All Advanced features included')
                }
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {plan.monthlyPrice && `${plan.monthlyPrice === 1195 ? '2.500' : '1.000'} ${language === 'de' ? 'Aufrufe/Monat inkl.' : 'views/month incl.'}`}
              </div>
            </div>
          )}
        </div>

        {/* Block 3: Basis Features (Auto Height) */}
        <div className="px-6 py-4 border-b">
          <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
            {language === 'de' ? 'Basis-Features' : 'Base Features'}
          </h4>
          <FeatureSection
            features={plan.baseFeatures || []}
            language={language}
            showAll={true}
          />
        </div>

        {/* Block 4: Specific Features (Flexible Height) */}
        <div className="px-6 py-4 flex-1">
          {plan.isStarterOption ? (
            <div>
              <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                {language === 'de' 
                  ? `${starterModule === 'clips' ? 'Clips' : 'Live Shopping'} Features`
                  : `${starterModule === 'clips' ? 'Clips' : 'Live Shopping'} Features`
                }
              </h4>
              <FeatureSection
                features={plan.moduleFeatures?.[starterModule] || []}
                language={language}
                showAll={expandedFeatures[`starter-${starterModule}`] || false}
                onToggle={() => onToggleFeatures(`starter-${starterModule}`)}
                maxInitial={5}
              />
            </div>
          ) : (
            <div>
              <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                {language === 'de' ? 'Exklusive Features' : 'Exclusive Features'}
              </h4>
              <FeatureSection
                features={plan.exclusiveFeatures || []}
                language={language}
                showAll={true}
              />
            </div>
          )}
        </div>

        {/* Block 5: CTA Button (Fixed Height: 80px) */}
        <div className="p-6 pt-4">
          <Button
            className={`w-full h-12 font-semibold ${
              isPopular 
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                : 'variant-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground'
            }`}
          >
            {plan.monthlyPrice 
              ? (language === 'de' ? 'Jetzt starten' : 'Start Now')
              : (language === 'de' ? 'Kontakt aufnehmen' : 'Contact Us')
            }
          </Button>
        </div>
      </Card>
    </div>
  );
};
