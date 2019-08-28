import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'query-string';
import './styles.scss';
import SearchBar from '../SearchBar/container';


class App extends React.Component {
  componentDidMount() {
    const { fetchPlayer } = this.props;
    const query = parse(window.location.search);

    if (query.steamId) {
      fetchPlayer(query.steamId);
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

App.propTypes = {
  fetchPlayer: PropTypes.func.isRequired,
};

export default App;
