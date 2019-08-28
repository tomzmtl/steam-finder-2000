import { connect } from 'react-redux';
import component from './component';


const mapState = (state) => ({
  gameCount: state.gameCount,
  player: state.player,
});

export default connect(mapState)(component);
