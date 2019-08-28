import ACTIONS from './actionTypes';


export const startWorking = () => ({
  type: ACTIONS.WORKING.ON,
});

export const stopWorking = () => ({
  type: ACTIONS.WORKING.OFF,
});
