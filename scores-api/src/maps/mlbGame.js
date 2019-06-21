import { getTeamScore, getOdds } from './scoreHelpers';

const mapGameToInternalModel = event => {
  return {
    id: event.header.id,
    completed: event.header.competitions[0].status.type.completed,
    inning: event.header.competitions[0].status.period,
    status: event.header.competitions[0].status.type.shortDetail,
    tvBroadcast: getTvBroadcast(event.header.competitions[0]),
    homeScore: mapScore(getTeamScore(event.header, 'home')),
    awayScore: mapScore(getTeamScore(event.header, 'away')),
    lastPlay: !!event.situation
      ? event.plays.find(p => p.id === event.situation.lastPlay.id).text
      : '',
    currentSituation: getCurrentSituation(event),
    boxScores: event.boxscore.players.map(teamBox => ({
      team: teamBox.team.displayName,
      statistics: teamBox.statistics.map(stats => ({
        type: stats.type,
        labels: stats.labels,
        descriptions: stats.descriptions,
        totals: stats.totals,
        players: stats.athletes.map(playerStats => ({
          active: playerStats.active,
          battingOrder: playerStats.batOrder,
          starter: playerStats.starter,
          name: playerStats.athlete.displayName,
          number: playerStats.athlete.jersey,
          position: playerStats.position.abbreviation,
          stats: playerStats.stats,
          notes: !!playerStats.notes ? playerStats.notes[0].text : ''
        }))
      }))
    })),
    odds: getOdds(event.pickcenter)
  };
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
    logo: scoreItem.team.logos[0].href,
    lineScores: scoreItem.linescores,
    record: scoreItem.record.find(r => r.type === 'total').summary
  };
}

function getCurrentSituation(event) {
  if (!!event.situation) {
    return {
      balls: event.situation.balls,
      strikes: event.situation.strikes,
      outs: event.situation.outs,
      onFirst: !!event.situation.onFirst,
      onSecond: !!event.situation.onSecond,
      onThird: !!event.situation.onThird
    };
  }
  return null;
}

function getTvBroadcast(competition) {
  const tvBroadcast = competition.broadcasts.find(
    b => b.type.shortName === 'TV' || b.type.shortName === 'Web'
  );
  return !!tvBroadcast ? tvBroadcast.media.shortName : '';
}

export default mapGameToInternalModel;
