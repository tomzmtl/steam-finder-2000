import { getTopGames } from '../helpers';
import { games } from '../../common/mocks';


describe('Reducer helpers', () => {
  describe('getTopGames', () => {
    test('return a maximum number of items', () => {
      expect(getTopGames(games, 10)).toHaveLength(10);
    });

    test('return a default maximum number of items', () => {
      expect(getTopGames(games)).toHaveLength(5);
    });

    test('return a list of games sorted by play time', () => {
      expect(getTopGames(games).map(item => item.appid))
        .toStrictEqual([294100, 8800, 212680, 3900, 233450]);
    });
  });
});
