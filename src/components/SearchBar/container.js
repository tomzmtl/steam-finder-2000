import { connect } from 'react-redux';
import component from './component';
import { fetchPlayer } from '../../redux/actions';


const mapState = (state) => ({
  player: state.player,
});

const mapDispatch = dispatch => ({
  fetchPlayer: data => dispatch(fetchPlayer(data)),
});

export default connect(mapState, mapDispatch)(component);
