export interface MlbScore {
  id: string;
  name: string;
  date: Date;
  status: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS';
  shortName: string;
  completed: boolean;
  inning: number;
  score: ScoreItem[];
}

export interface ScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  hits: number;
  errors: number;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
}
