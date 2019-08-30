import { connect } from 'react-redux';
import component from './component';


const mapState = (state) => ({
  games: state.games.list,
  title: state.games.title,
  working: state.working,
});

export default connect(mapState)(component);
