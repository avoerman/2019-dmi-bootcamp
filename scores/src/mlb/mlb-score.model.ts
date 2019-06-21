export interface MlbScore {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS';
  status: string;
  shortName: string;
  completed: boolean;
  inning: number;
  score: ScoreItem[];
}

export interface ScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
}

export interface MlbBoxScore {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS';
  status: string;
  shortName: string;
  completed: boolean;
  inning: number;
  score: BoxScoreItem[];
}

export interface BoxScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  hits: number;
  errors: number;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
  lineScores: LineScore[];
  logo: string;
}

export interface LineScore {
  value: number;
}
