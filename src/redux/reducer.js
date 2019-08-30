import ACTIONS from './actionTypes';
import { updateGamesList } from './helpers';


const initialState = {
  activityTab: 0,
  games: {
    list: [],
    title: null,
  },
  player: null,
  working: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.WORKING.ON:
      return {
        ...state,
        working: true,
      };

    case ACTIONS.WORKING.OFF:
      return {
        ...state,
        working: false,
      };

    case ACTIONS.PLAYER.UPDATE: {
      const [title, games] = updateGamesList(state.activityTab, action.player);

      return {
        ...state,
        games: {
          list: games,
          title,
        },
        player: action.player,
      };
    }

    case ACTIONS.ACTIVITY.UPDATE: {
      const [title, games] = updateGamesList(action.index, state.player);

      return {
        ...state,
        activityTab: action.index,
        games: {
          list: games,
          title,
        },
      };
    }

    default: return state;
  }
}
