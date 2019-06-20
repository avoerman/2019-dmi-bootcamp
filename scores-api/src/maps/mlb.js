const mapToInternalModel = data => {
  const events = data.events;

  return events.map(event => ({
    id: event.id,
    date: event.date,
    name: event.name,
    shortName: event.shortName,
    status: event.status.type.name,
    completed: event.competitions[0].status.type.completed,
    inning: event.competitions[0].status.period,
    score: event.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      hits: scoreItem.hits,
      errors: scoreItem.errors,
      winner: scoreItem.winner,
      teamAbbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName
    }))
  }));
};

export default mapToInternalModel;
