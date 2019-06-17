const mapToInternalModel = data => {
  const events = data.events;

  return events.map(event => ({
    id: event.id,
    name: event.name,
    shortName: event.shortName,
    completed: event.competitions[0].status.type.completed,
    inning: event.competitions[0].status.period,
    score: event.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      hits: scoreItem.hits,
      errors: scoreItem.errors,
      winner: scoreItem.winner,
      abbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName
    }))
  }));
};

export default mapToInternalModel;
