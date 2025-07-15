
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface Feature {
  text: string;
  textEN?: string;
  tooltip?: string;
  tooltipEN?: string;
}

interface FeatureSectionProps {
  features: Feature[];
  language: 'de' | 'en';
  showAll: boolean;
  onToggle?: () => void;
  maxInitial?: number;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  features,
  language,
  showAll,
  onToggle,
  maxInitial = 5
}) => {
  const displayFeatures = showAll ? features : features.slice(0, maxInitial);
  const hasMore = features.length > maxInitial;

  return (
    <div className="space-y-3">
      {displayFeatures.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-sm text-foreground leading-relaxed">
            {language === 'de' ? feature.text : (feature.textEN || feature.text)}
          </span>
        </div>
      ))}
      
      {hasMore && onToggle && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="w-full mt-3 text-primary hover:text-primary hover:bg-primary/5"
        >
          <span className="mr-2">
            {showAll 
              ? (language === 'de' ? 'Weniger anzeigen' : 'Show less')
              : (language === 'de' ? 'Mehr anzeigen' : 'Show more')
            }
          </span>
          {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
      )}
    </div>
  );
};
