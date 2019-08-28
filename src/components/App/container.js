import { connect } from 'react-redux';
import component from './component';


const mapState = (state) => ({
  working: state.working,
});

export default connect(mapState)(component);
