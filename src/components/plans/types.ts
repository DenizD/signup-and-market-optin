
export interface Feature {
  text: string;
  textEN?: string;
  tooltip?: string;
  tooltipEN?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  descriptionEN: string;
  subtitle: string;
  subtitleEN: string;
  monthlyPrice: number | null;
  popular: boolean;
  isStarterOption: boolean;
  baseFeatures?: Feature[];
  moduleFeatures?: {
    clips: Feature[];
    'live-shopping': Feature[];
  };
  exclusiveFeatures?: Feature[];
}

export interface PlanCardProps {
  plan: Plan;
  language: 'de' | 'en';
  isPopular: boolean;
  starterModule: 'clips' | 'live-shopping';
  onModuleChange: (module: 'clips' | 'live-shopping') => void;
  expandedFeatures: Record<string, boolean>;
  onToggleFeatures: (key: string) => void;
}
