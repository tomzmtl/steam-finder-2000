import ACTIONS from './actionTypes';


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
