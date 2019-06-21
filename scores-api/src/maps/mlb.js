import { getTeamScore, getOdds } from './scoreHelpers';

const mapToInternalModel = data => {
  const events = data.events;

  return events.map(event => ({
    id: event.id,
    date: event.date,
    name: event.name,
    shortName: event.shortName,
    completed: event.competitions[0].status.type.completed,
    inning: event.competitions[0].status.period,
    status: event.competitions[0].status.type.shortDetail,
    statusType: event.status.type.name,
    tvBroadcast: getTvBroadcast(event.competitions[0]),
    homeScore: mapScore(getTeamScore(event, 'home')),
    awayScore: mapScore(getTeamScore(event, 'away')),
    odds: getOdds(event.competitions[0].odds)
  }));
};

function mapScore(scoreItem) {
  return {
    homeAway: scoreItem.homeAway,
    score: scoreItem.score,
    hits: scoreItem.hits,
    errors: scoreItem.errors,
    winner: scoreItem.winner,
    teamAbbreviation: scoreItem.team.abbreviation,
    team: scoreItem.team.displayName,
    logo: scoreItem.team.logo
  };
}

function getTvBroadcast(competition) {
  const tvBroadcast = competition.geoBroadcasts.find(
    b => b.type.shortName === 'TV' || b.type.shortName === 'Web'
  );
  return !!tvBroadcast ? tvBroadcast.media.shortName : '';
}

export default mapToInternalModel;
