import React from 'react';
import { parse } from 'query-string';
import './styles.scss';
import * as api from '../../common/api';


class App extends React.Component {
  componentDidMount() {
    const { updatePlayer } = this.props;
    const query = parse(window.location.search);

    if (query.steamId) {
      api.fetchPlayer(query.steamId).then(player => updatePlayer(player));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__main" />
      </div>
    );
  }
}

export default App;
