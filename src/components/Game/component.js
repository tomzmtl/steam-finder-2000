import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const makeUrl = (appId, imgId) =>
  `http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${imgId}.jpg`;

const minutesToHours = minutes => {
  if (!minutes) {
    return 0;
  }

  return Math.ceil(minutes / 60);
}

const Game = ({ game, position }) => {
  const totalPlayTime = minutesToHours(game.playtime_forever);
  const recentPlayTime = minutesToHours(game.playtime_2weeks);

  return (
    <div className="Game">
      <div className="Game__name">
        {`${position}. ${game.name}`}
      </div>
      <div className="Game__data">
        <div className="Game__image">
          <img className="Game__img" src={makeUrl(game.appid, game.img_logo_url)} alt={game.name} />
        </div>
        <div className="Game__info">
          <div className="Game__icon">
            <img className="Game__iconImg" src={makeUrl(game.appid, game.img_icon_url)} alt={game.name} />
          </div>
          <div className="Game__playtime">
            <div className="Game__stat Game__total">
              <div className="UI__subtitle">Total playtime</div>
              <div className="UI__body1">{`${totalPlayTime}h`}</div>
            </div>
            <div className="Game__stat Game__recent ">
              <div className="UI__subtitle">Last 2 weeks</div>
              <div className="UI__body1">{`${recentPlayTime}h`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Game.propTypes = {
  game: PropTypes.shape().isRequired,
  position: PropTypes.number.isRequired,
};

export default Game;
