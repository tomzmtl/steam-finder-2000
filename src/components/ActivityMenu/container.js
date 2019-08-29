import { connect } from 'react-redux';
import component from './component';
import { changeActivityTab } from '../../redux/actions';


const mapState = (state) => ({
  activeTab: state.activityTab,
});

const mapDispatch = dispatch => ({
  changeTab: index => dispatch(changeActivityTab(index)),
});

export default connect(mapState, mapDispatch)(component);
