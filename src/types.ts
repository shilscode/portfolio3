export interface LogbookSubPhase {
  period: string;
  title: string;
  type: 'sailing' | 'dock';
  details: string;
}

export interface LogbookEntry {
  id: string;
  vesselName: string;
  role: string;
  period: string;
  location: string;
  description: string;
  vesselLink: string;
  status: 'In Dock' | 'At Sea' | 'Active';
  bullets?: string[];
  subPhases?: LogbookSubPhase[];
}

export interface DesignProject {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  previewUrl: string;
}
