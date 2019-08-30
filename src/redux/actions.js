import ACTIONS from './actionTypes';
import * as api from '../common/api';


export const startWorking = () => ({
  type: ACTIONS.WORKING.ON,
});

export const stopWorking = () => ({
  type: ACTIONS.WORKING.OFF,
});

export const updatePlayer = player => ({
  type: ACTIONS.PLAYER.UPDATE,
  player,
});

export const showError = () => ({
  type: ACTIONS.ERROR,
});

export const fetchPlayer = playerId => (dispatch, getState) => {
  dispatch(startWorking());
  api.fetchPlayer(playerId)
    .then(response => {
      if (response.error) {
        dispatch(showError());
      } else {
        dispatch(updatePlayer(response));
      }
      dispatch(stopWorking());
    });
  };

export const changeActivityTab = index => ({
  type: ACTIONS.ACTIVITY.UPDATE,
  index,
})
