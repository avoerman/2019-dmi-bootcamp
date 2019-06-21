import { getTvBroadcast } from './scoreHelpers';

const mapToInternalModel = data => {
  const events = data.events;

  return events.map(event => ({
    id: event.id,
    name: event.name,
    date: event.date,
    shortName: event.shortName,
    completed: event.competitions[0].status.type.completed,
    clock: event.competitions[0].status.displayClock,
    period: event.competitions[0].status.period,
    status: event.status.type.name,
    statusType: event.status.type.name,
    statusDetail: event.competitions[0].status.type.shortDetail,
    tvBroadcast: getTvBroadcast(event.competitions[0].geoBroadcasts),
    score: event.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      winner: scoreItem.winner,
      teamAbbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName,
      logo: scoreItem.team.logo
    }))
  }));
};

export default mapToInternalModel;
