import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';


const Game = ({ game }) => (
  <div className="Game">{game.name}</div>
);

Game.propTypes = {};

export default Game;
