import ACTIONS from './actionTypes';
import { updateGamesList } from './helpers';


const initialState = {
  activityTab: 0, // currently selected tab
  error: false, // flag if there was a fetch error
  games: {
    list: [], // games displayed in games panel
    title: null, // title of game panel
  },
  player: null, // full player object
  working: false, // data loading flag
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
        error: false,
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

    case ACTIONS.ERROR:
      return {
        ...initialState,
        error: true,
      };

    default: return state;
  }
}
