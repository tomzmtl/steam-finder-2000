export const getTopGames = (games, limit = 5) => {
  return games;
}


export const updateGamesList = (tabIndex, player) => {
  switch (tabIndex) {
    case 0: return ['Top 10 Games', getTopGames(player.games.games, 10)];
    case 1: return ['Last 2 weeks', player.recentGames.games || []];
    default: return [null, []];
  }
}
