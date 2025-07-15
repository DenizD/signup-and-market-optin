
import { Plan } from './types';

export const baseFeatures = [
  {
    text: 'Flexibler Video Shopping Player (Bild-in-Bild)',
    textEN: 'Flexible Video Shopping Player (Picture-in-Picture)'
  },
  {
    text: 'Mediathek & Playlists mit Tagging',
    textEN: 'Media Library & Playlists with Tagging'
  },
  {
    text: 'Endlos-Play & Swipe',
    textEN: 'Endless Play & Swipe'
  },
  {
    text: 'Einfache Player-Integration (1-Code)',
    textEN: 'Simple Player Integration (1-Code)'
  },
  {
    text: 'Self-Branding',
    textEN: 'Self-Branding'
  },
  {
    text: 'Basis-Support (Ticketsystem)',
    textEN: 'Basic Support (Ticket System)'
  }
];

export const moduleFeatures = {
  clips: [
    {
      text: 'Video-Import & Verwaltung',
      textEN: 'Video Import & Management'
    },
    {
      text: 'Produkt-Thumbnail-Anzeige',
      textEN: 'Product Thumbnail Display'
    },
    {
      text: 'Automatischer Thumbnail-Generator',
      textEN: 'Automatic Thumbnail Generator'
    }
  ],
  'live-shopping': [
    {
      text: 'Video-on-Demand-Speicherung',
      textEN: 'Video-on-Demand Storage'
    },
    {
      text: 'Kalenderintegration (Add-to-Calendar)',
      textEN: 'Calendar Integration (Add-to-Calendar)'
    },
    {
      text: 'Broadcasting-App für Live-Streams',
      textEN: 'Broadcasting App for Live Streams'
    },
    {
      text: 'Live-Chat & Moderation',
      textEN: 'Live Chat & Moderation'
    },
    {
      text: 'Social Media Multistreaming',
      textEN: 'Social Media Multistreaming'
    },
    {
      text: 'Pre-Live Countdown',
      textEN: 'Pre-Live Countdown'
    },
    {
      text: 'Hybrid-Streaming (RTMP/externe Apps)',
      textEN: 'Hybrid Streaming (RTMP/External Apps)'
    },
    {
      text: 'Host-Funktion für Live Shopping',
      textEN: 'Host Function for Live Shopping'
    },
    {
      text: 'Upload voraufgezeichneter Shows',
      textEN: 'Upload Pre-recorded Shows'
    },
    {
      text: 'Show-Download',
      textEN: 'Show Download'
    },
    {
      text: 'Produkt-Highlighting & Timestamps',
      textEN: 'Product Highlighting & Timestamps'
    },
    {
      text: 'Floating Action Video Widget',
      textEN: 'Floating Action Video Widget'
    }
  ]
};

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Einstieg in professionellen Video Commerce',
    descriptionEN: 'Getting started with professional video commerce',
    subtitle: 'Für Einsteiger',
    subtitleEN: 'For Beginners',
    monthlyPrice: 495,
    popular: false,
    isStarterOption: true,
    baseFeatures,
    moduleFeatures
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Die komplette Video-Commerce Lösung',
    descriptionEN: 'The complete video commerce solution',
    subtitle: 'Für Teams',
    subtitleEN: 'For Teams',
    monthlyPrice: 1195,
    popular: true,
    isStarterOption: false,
    baseFeatures,
    exclusiveFeatures: [
      {
        text: 'Vollständiges Video Commerce Paket (Live Shopping & Clips)',
        textEN: 'Complete Video Commerce Package (Live Shopping & Clips)'
      },
      {
        text: 'Erweiterter API-Zugriff',
        textEN: 'Extended API Access'
      },
      {
        text: 'Integration von Produktdetailseiten (PDS)',
        textEN: 'Product Detail Page Integration (PDP)'
      },
      {
        text: 'Advanced Analytics mit Export-Funktion',
        textEN: 'Advanced Analytics with Export Function'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Maßgeschneiderte Unternehmenslösung',
    descriptionEN: 'Tailored enterprise solution',
    subtitle: 'Für Konzerne',
    subtitleEN: 'For Enterprises',
    monthlyPrice: null,
    popular: false,
    isStarterOption: false,
    baseFeatures,
    exclusiveFeatures: [
      {
        text: 'KI-Bot Integration',
        textEN: 'AI Bot Integration'
      },
      {
        text: 'Custom Viewer Pakete',
        textEN: 'Custom Viewer Packages'
      },
      {
        text: 'Multi-Company-Funktionen',
        textEN: 'Multi-Company Functions'
      },
      {
        text: 'Enterprise Support (24/7)',
        textEN: 'Enterprise Support (24/7)'
      },
      {
        text: 'Persönlicher Success Manager',
        textEN: 'Personal Success Manager'
      },
      {
        text: 'Individuelle Trainings',
        textEN: 'Individual Training'
      }
    ]
  }
];
