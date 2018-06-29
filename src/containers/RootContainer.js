import {connect} from 'react-redux';
import RootComponent from '../components/RootComponent';

const mapStateToProps = state => ({
    activeView: state.activeView
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent);
