import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';
import Game from '../Game/component';
import Spinner from '../Spinner/component';



const Games = ({ games, title, working }) => {
  const renderGames = () => {
    if (games.length === 0) {
      return <div>Nothing to see here!</div>
    }

    return games.map((game, index) => <Game game={game} position={index + 1} key={game.appid} />);
  };

  return (
    <div className="Games">
      <div className="Games__title">
        <div className="Games__titleWrapper">
          {title}
        </div>
      </div>
      <div className="Games__list">
        {working ? <Spinner /> : renderGames()}
      </div>
    </div>
  );
}

Games.propTypes = {};

export default Games;
