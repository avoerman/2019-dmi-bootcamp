import { getTvBroadcast } from './scoreHelpers';

const mapMatchToInternalModel = event => {
  return {
    id: event.header.id,
    date: event.header.competitions[0].date,
    completed: event.header.competitions[0].status.type.completed,
    period: event.header.competitions[0].status.period,
    clock: event.header.competitions[0].status.clock,
    status: event.header.competitions[0].status.type.shortDetail,
    note: event.header.season.name,
    tvBroadcast: getTvBroadcast(event.header.competitions[0].broadcasts),
    header: event.header.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      hits: scoreItem.hits,
      errors: scoreItem.errors,
      winner: scoreItem.winner,
      teamAbbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName,
      logo: scoreItem.team.logos[0].href,
      lineScores: scoreItem.linescores
    })),
    teamStats: event.boxscore.teams.map(teamBox => ({
      team: teamBox.team.displayName,
      logo: teamBox.team.logo,
      stats: teamBox.statistics
    })),
    goals: getGoals(event.header.competitions[0].details)
  };
};

function getGoals(details) {
  if (!!details) {
    return event.header.competitions[0].details.map(goal => ({
      clock: goal.clock.displayValue,
      team: goal.team.displayName,
      ownGoal: goal.ownGoal,
      player: goal.participants[0].athlete.displayName,
      penaltyKick: goal.penaltyKick
    }));
  }
  return null;
}

export default mapMatchToInternalModel;
