import ACTIONS from './actionTypes';


const initialState = {
  activityTab: 0,
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

    case ACTIONS.PLAYER.UPDATE:
      return {
        ...state,
        player: action.player,
      };

    case ACTIONS.ACTIVITY.UPDATE:
      return {
        ...state,
        activityTab: action.index,
      };

    default: return state;
  }
}
