import {connect} from 'react-redux';
import ReposComponent from '../components/ReposComponent';
import {
    setActiveView,
    fetchRepos,
    reposSuccess,
    reposError
} from '../actions';

const mapStateToProps = state => ({
    repos: state.repos
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposComponent);
