import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import './styles.scss';
import PlayerInfo from '../PlayerInfo/container';
import SearchBar from '../SearchBar/container';
import Spinner from '../PlayerInfo/component';


class App extends React.Component {
  componentDidMount() {
    const { fetchPlayer } = this.props;
    const query = parse(window.location.search);

    if (query.steamId) {
      fetchPlayer(query.steamId);
    }
  }

  render() {
    const { player, working } = this.props;
    return (
      <div className="App">
        <SearchBar />
        {working ? <Spinner /> : null}
        {player ? <PlayerInfo /> : null}
      </div>
    );
  }
}

App.propTypes = {
  fetchPlayer: PropTypes.func.isRequired,
};

export default App;
