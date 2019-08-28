import ACTIONS from './actionTypes';


const initialState = {
  working: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.WORKING.ON:
      return {
        ...state,
        working: false,
      };

    case ACTIONS.WORKING.OFF:
      return {
        ...state,
        working: false,
      };

    default: return state;
  }
}
