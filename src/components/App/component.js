import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import './styles.scss';
import PlayerInfo from '../PlayerInfo/container';
import SearchBar from '../SearchBar/container';
import Spinner from '../Spinner/component';
import ActivityMenu from '../ActivityMenu/container';
import Games from '../Games/container';


class App extends React.Component {
  componentDidMount() {
    const { fetchPlayer } = this.props;
    const query = parse(window.location.search);

    if (query.steamId) {
      fetchPlayer(query.steamId);
    }
  }

  renderContent() {
    const { working, player } = this.props;

    if (working) {
      return <Spinner />;
    }

    if (player) {
      return (
        <React.Fragment>
          <PlayerInfo />
          {
            player.games
              ? <ActivityMenu />
              : (
                <div className="App__noGameData">
                  This player doesn't want to share game data. No peeking!
                </div>
              )
          }
        </React.Fragment>
      )
    }

    return null;
  }

  render() {
    return (
      <div className="App">
        <div className="App__main">
          <SearchBar />
          {this.renderContent()}
        </div>
        <Games />
      </div>
    );
  }
}

App.propTypes = {
  fetchPlayer: PropTypes.func.isRequired,
};

export default App;
