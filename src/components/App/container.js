import { connect } from 'react-redux';
import component from './component';
import { updatePlayer } from '../../redux/actions';


const mapState = (state) => ({
  working: state.working,
});

const mapDispatch = dispatch => ({
  updatePlayer: data => dispatch(updatePlayer(data)),
});

export default connect(mapState, mapDispatch)(component);
