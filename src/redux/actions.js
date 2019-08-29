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

export const fetchPlayer = playerId => (dispatch, getState) => {
  dispatch(startWorking());
  api.fetchPlayer(playerId).then(player => {
    dispatch(updatePlayer(player));
    dispatch(stopWorking());
  });
}

export const changeActivityTab = index => ({
  type: ACTIONS.ACTIVITY.UPDATE,
  index,
})
