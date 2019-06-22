export interface WwcScore {
  id: string;
  name: string;
  date: Date;
  statusType: 'STATUS_SCHEDULED' | 'STATUS_IN_PROGRESS' | 'STATUS_FINAL';
  status: string;
  shortName: string;
  completed: boolean;
  homeScore: WwcScoreItem;
  awayScore: WwcScoreItem;
}

export interface WwcScoreItem {
  homeAway: 'home' | 'away';
  score: string;
  winner: boolean;
  teamAbbreviation: string;
  team: string;
}

export interface WwcBoxScore extends WwcScore {
  tvBroadcast: string;
  homeScore: WwcBoxScoreItem;
  awayScore: WwcBoxScoreItem;
}

export interface WwcBoxScoreItem extends WwcScoreItem {
  logo: string;
}
