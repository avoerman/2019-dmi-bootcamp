const mapToInternalModel = data => {
  const events = data.events;

  return events.map(event => ({
    id: event.id,
    name: event.name,
    shortName: event.shortName,
    completed: event.competitions[0].status.type.completed,
    clock: event.competitions[0].status.displayClock,
    score: event.competitions[0].competitors.map(scoreItem => ({
      homeAway: scoreItem.homeAway,
      score: scoreItem.score,
      winner: scoreItem.winner,
      teamAbbreviation: scoreItem.team.abbreviation,
      team: scoreItem.team.displayName
    }))
  }));
};

export default mapToInternalModel;
