import React from 'react';
import PlayerProfile from '../PlayerProfile/container';
import './styles.scss';


const PlayerInfo = ({ player }) => (
  <div className="PlayerInfo">
    <PlayerProfile />
  </div>
);

export default PlayerInfo;
