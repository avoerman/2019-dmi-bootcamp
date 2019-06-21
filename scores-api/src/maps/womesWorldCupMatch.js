const mapMatchToInternalModel = event => {
  return {
    id: event.id,
    name: event.name,
    shortName: event.shortName,
    completed: event.competitions[0].status.type.completed,
    inning: event.competitions[0].status.period,
    status: event.status.type.shortDetail,
    tvBroadcast: getTvBroadcast(event.competitions[0]),
    score: event.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      hits: scoreItem.hits,
      errors: scoreItem.errors,
      winner: scoreItem.winner,
      teamAbbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName,
      logo: scoreItem.team.logo,
      lineScores: scoreItem.linescores
    }))
  };
};

function getTvBroadcast(competition) {
  const tvBroadcast = competition.geoBroadcasts.find(
    b => b.type.shortName === "TV" || b.type.shortName === "Web"
  );
  return !!tvBroadcast ? tvBroadcast.media.shortName : "";
}

export default mapMatchToInternalModel;