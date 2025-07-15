
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useTranslations } from '@/hooks/useTranslations';
import { PlanCard } from '@/components/plans/PlanCard';
import { plans } from '@/components/plans/plansData';

const Plans = () => {
  const { language } = useTranslations();
  const [starterModule, setStarterModule] = useState<'clips' | 'live-shopping'>('clips');
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeatures = (key: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-16">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {language === 'de' ? 'Entdecken Sie unsere Pläne' : 'Discover our Plans'}
          </h1>
          <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Wählen Sie den perfekten Plan für Ihr Unternehmen und starten Sie noch heute'
              : 'Choose the perfect plan for your business and get started today'
            }
          </p>
          <p className="text-muted-foreground">
            {language === 'de' 
              ? 'Alle Pakete enthalten kostenlose Updates'
              : 'All packages include free updates'
            }
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              language={language as 'de' | 'en'}
              isPopular={plan.popular}
              starterModule={starterModule}
              onModuleChange={setStarterModule}
              expandedFeatures={expandedFeatures}
              onToggleFeatures={toggleFeatures}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {language === 'de' ? 'Zusätzliche Informationen' : 'Additional Information'}
          </h2>
          
          <div className="space-y-6">
            <p className="text-foreground font-medium">
              {language === 'de' 
                ? 'Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.'
                : 'All prices are subject to applicable VAT.'
              }
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <sup>1</sup> {language === 'de' 
                  ? 'Kostenlose Aufrufe pro Monat im jeweiligen Plan enthalten. Zusätzliche Aufrufe werden mit 0,15€ pro Aufruf berechnet und automatisch über die hinterlegte Zahlungsmethode nutzungsbasiert abgerechnet.'
                  : 'Free views per month included in the respective plan. Additional views are charged at €0.15 per view and automatically debited via the stored payment method according to usage.'
                }
              </p>
            </div>
            
            <div className="text-center pt-4 border-t">
              <p className="text-primary font-semibold">
                {language === 'de' 
                  ? 'Individuelle Lösungen und maßgeschneiderte Pakete auf Anfrage verfügbar.'
                  : 'Individual solutions and custom packages available upon request.'
                }
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
