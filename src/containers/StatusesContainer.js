import {connect} from 'react-redux';
import StatusesComponent from '../components/StatusesComponent';
// import {setActiveView, postNewStatus, createNewStatus} from '../actions';

const mapStateToProps = state => ({
    statuses: state.statuses
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusesComponent);
