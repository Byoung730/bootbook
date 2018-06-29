import {connect} from 'react-redux';
import SingleStatusComponent from '../components/SingleStatusComponent';
import {removeStatus} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    statuses: state.statuses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeStatus: () => dispatch(removeStatus(ownProps.status.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleStatusComponent);
