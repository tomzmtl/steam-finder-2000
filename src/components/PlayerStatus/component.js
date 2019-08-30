import React from 'react';
import classnames from 'classnames';
import './styles.scss';


const PlayerStatus = ({ status }) => {
  const getStatusLabel = () => {
    switch (status) {
      case 0: return 'offline';
      case 1: return 'online';
      case 2: return 'busy';
      case 3: return 'away';
      case 4: return 'snooze';
      case 5: return 'looking to trade';
      case 6: return 'looking to play';
      default: return 'n/a'
    }
  }

  const classes = classnames({
    PlayerStatus: true,
    [`PlayerStatus--${status}`]: true,
  });

  return <div className={classes}>{getStatusLabel()}</div>;
}

export default PlayerStatus;
