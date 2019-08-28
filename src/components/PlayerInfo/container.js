import { connect } from 'react-redux';
import component from './component';


const mapState = (state) => ({
  player: state.player,
});

export default connect(mapState)(component);
