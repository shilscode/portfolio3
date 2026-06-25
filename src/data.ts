import { LogbookEntry } from './types';

export interface ClientCollaboration {
  id: string;
  name: string;
  role: string;
  description: string;
  photoUrl: string;
  isArtist?: boolean;
}

export const LOGBOOK_ENTRIES: LogbookEntry[] = [
  {
    id: 'maersk-canyon',
    vesselName: 'MV Maersk Canyon',
    role: 'ETO Cadet',
    period: '4 July 2026 – 4 January 2027',
    location: 'Worldwide Operations',
    description: 'Assigned as Electro-Technical Officer (ETO) Cadet for global deep-sea routes. Overseeing automated control machinery, integrated bridge networks, safety alarms, generators synchronization, and auxiliary power distribution loops.',
    vesselLink: 'https://canyon-sea-track.vercel.app/',
    status: 'Active'
  },
  {
    id: 'maersk-erving',
    vesselName: 'MV Maersk Erving',
    role: 'ETO Cadet',
    period: '27 September 2025 – 25 February 2026',
    location: 'Worldwide Operations',
    description: 'Sailed as ETO Cadet executing automation diagnostics and power management. Led comprehensive high-voltage checks and automated control calibrations. Successfully completed an intensive dry-dock period in China mid-transit.',
    vesselLink: 'https://erving.tiiny.site',
    status: 'In Dock',
    subPhases: [
      {
        period: '27 Sep – 30 Nov 2025',
        title: 'Active Sailing Routes',
        type: 'sailing',
        details: 'Active intercontinental routes. Managed standard power grids, bridge equipment, and automation telemetry.'
      },
      {
        period: '1 Dec – 31 Dec 2025',
        title: 'Dry Dock Operations (Zhoushan, China)',
        type: 'dock',
        details: 'Specialized diagnostic checks, high-voltage panel tests, battery bank replacements, and automation overhaul inside the shipyard.'
      },
      {
        period: '1 Jan – 25 Feb 2026',
        title: 'Post-Dock Commissioning & Worldwide Sailing',
        type: 'sailing',
        details: 'Completed post-refit system tests and returned to global deep-sea supply run operations.'
      }
    ]
  },
  {
    id: 'ltimindtree',
    vesselName: 'LTIMindtree',
    role: 'L3 Application Support Engineer',
    period: 'May 2022 – May 2025',
    location: 'Enterprise Digital Center',
    description: 'Brought systemic engineering rigor, defect tracing, and software infrastructure support to high-severity client applications, setting the mathematical baseline for modern maritime automation.',
    vesselLink: 'https://www.linkedin.com/in/shilshuvendu/',
    status: 'Active',
    bullets: [
      'Managed application escalations and critical issue resolution.',
      'Handled P1 and P2 production incidents.',
      'Investigated and resolved application defects and bugs.',
      'Coordinated directly with clients and internal technical teams.',
      'Supported audit and compliance activities.',
      'Performed root cause analysis and implemented preventive fixes.',
      'Ensured application stability and service availability.'
    ]
  }
];

export const CLIENT_COLLABORATIONS: ClientCollaboration[] = [
  {
    id: 'kaushiki',
    name: 'Kaushiki Chakraborty',
    role: 'Indian Classical Vocal Maestro',
    description: 'Coordinated bespoke creative designs, digital identity, and musical project publications reflecting Indian classical arts.',
    photoUrl: '/Kaushiki.jpeg',
    isArtist: true
  },
  {
    id: 'shantanu',
    name: 'Shantanu Moitra',
    role: 'Award-Winning Music Composer',
    description: 'Collaborated on print design layouts, promotional creatives, and album art layout systems centered around rich storytelling compositions.',
    photoUrl: '/shantonu.jpeg',
    isArtist: true
  },
  {
    id: 'sandip',
    name: 'Sandip Ghosh',
    role: 'Celebrated Tabla Player',
    description: 'Designed premium artist press-kits, social branding grids, and promotional media materials presenting the geometry of rhythm.',
    photoUrl: '/sandip ghosh .jpeg',
    isArtist: true
  },
  {
    id: 'kushal',
    name: 'Pt. Kushal Das',
    role: 'Sitar & Surbahar Maestro',
    description: 'Authored digital portfolios, concert layout guides, and elegant archival covers honoring classical legacy.',
    photoUrl: '/Pandit-Kushal-Das-.webp',
    isArtist: true
  },
  {
    id: 'gaanpeon',
    name: 'Gaanpeon',
    role: 'Independent Music Platform',
    description: 'Built comprehensive brand identity, visual merchandising guidelines, and UI design grids representing regional melodies.',
    photoUrl: '/gannpeon.png',
    isArtist: false
  },
  {
    id: 'marthala',
    name: 'Marthala Solutions',
    role: 'Enterprise Software & Consultancy',
    description: 'Architected high-end layout guides, modern marketing publications, and clean corporate style structures.',
    photoUrl: '/marthala solutions.jpeg',
    isArtist: false
  },
  {
    id: 'chhandayan',
    name: 'Chhandayan Arts Center',
    role: 'Traditional Indian Music & Dance',
    description: 'Traditional Indian music & dance center, organizing prestigious concerts and archival publications.',
    photoUrl: '/chhandyana.png',
    isArtist: false
  }
];

