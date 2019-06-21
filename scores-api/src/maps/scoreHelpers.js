export const getTeamScore = (event, homeAway) => {
  return event.competitions[0].competitors.find(
    team => team.homeAway === homeAway
  );
};
