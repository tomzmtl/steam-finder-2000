/**
 * Returns a subset of games, sorted by playtime, ASC.
 * @param  {array} games
 * @param  {Number} [limit=5] limit the number of items returned
 * @return {array}
 */
export const getTopGames = (games, limit = 5) => {
  const sortFn = (a, b) => a.playtime_forever < b.playtime_forever ? 1 : -1;
  return games.sort(sortFn).slice(0, limit);
}


/**
 * Returns data necessary to display games panel.
 * @param  {Number} tabIndex Current active tab
 * @param  {Object} player
 * @return {array} Title and games wrapped in an array for easy access.
 */
export const updateGamesList = (tabIndex, player) => {
  switch (tabIndex) {
    case 0: {
      if (player.games) {
        return ['Top 10 Games', getTopGames(player.games.games, 10)];
      }
      return [null, []];
    }

    case 1: {
      if (player.recentGames) {
        return ['Last 2 weeks', player.recentGames.games || []];
      }
      return [null, []];
    }

    default: return [null, []];
  }
}
