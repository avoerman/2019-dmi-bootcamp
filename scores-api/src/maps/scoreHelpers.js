export const getTeamScore = (event, homeAway) => {
  return event.competitions[0].competitors.find(
    team => team.homeAway === homeAway
  );
};

export const getOdds = (odds) => {
  if (!!odds) {
    return {
      details: odds[0].details,
      overUnder: odds[0].overUnder
    }
  }
}
