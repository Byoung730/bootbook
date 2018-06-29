import {connect} from 'react-redux';
import PostStatusComponent from '../components/PostStatusComponent';
import {setActiveView, postNewStatus, createNewStatus} from '../actions';

const mapStateToProps = state => ({
    status: state.statusInputValue
});

const mapDispatchToProps = dispatch => ({
    statusFieldChange: event => dispatch(postNewStatus(event.target.value)),
    postNewStatus: () => dispatch(createNewStatus())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostStatusComponent);
