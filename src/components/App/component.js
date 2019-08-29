import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import './styles.scss';
import PlayerInfo from '../PlayerInfo/container';
import SearchBar from '../SearchBar/container';
import Spinner from '../Spinner/component';


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
          <PlayerInfo />
      )
    }

    return null;
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.renderContent()}
      </div>
    );
  }
}

App.propTypes = {
  fetchPlayer: PropTypes.func.isRequired,
};

export default App;
