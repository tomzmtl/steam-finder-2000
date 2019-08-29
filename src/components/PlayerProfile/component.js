import React from 'react';
import PlayerStatus from '../PlayerStatus/component';
import './styles.scss';


const renderOwnedGames = (count) => {
  return (
    <div className="PlayerProfile__gamesOwned">
      <div className="PlayerProfile__gamesOwnedCount">
        {count}
      </div>
      <div className="UI__subtitle">
        Total games owned
      </div>
    </div>
  )
}

const PlayerProfile = ({ player }) => (
  <div className="PlayerProfile">
    <div className="PlayerProfile__name">{player.personaname}</div>
    <div className="PlayerProfile__avatar">
      <img className="PlayerProfile__img" src={player.avatarfull} alt={player.personaname} />
    </div>
    <PlayerStatus status={player.personastate} />
    {player.games ? renderOwnedGames(player.games.game_count) : null}
    <a className="PlayerProfile__url" href={player.profileurl} target="_blank" rel="noopener noreferrer">
      {player.profileurl}
    </a>
    <div className="UI__subtitle">Profile URL</div>
  </div>
);

export default PlayerProfile;
