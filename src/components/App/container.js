import { connect } from 'react-redux';
import component from './component';
import { fetchPlayer } from '../../redux/actions';


const mapState = (state) => ({
  error: state.error,
  player: state.player,
  working: state.working,
});

const mapDispatch = dispatch => ({
  fetchPlayer: data => dispatch(fetchPlayer(data)),
});

export default connect(mapState, mapDispatch)(component);
