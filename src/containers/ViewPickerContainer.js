import {connect} from 'react-redux';
import ViewPickerComponent from '../components/ViewPickerComponent';
import {setActiveView, fetchRepos} from '../actions';

const mapStateToProps = state => ({
    activeView: state.activeView
});

const mapDispatchToProps = dispatch => ({
    setActiveView: event => {
        const viewName = event.currentTarget.dataset.viewName;

        if (viewName === 'MY_REPOS') {
            dispatch(fetchRepos());
        }

        dispatch(setActiveView(viewName));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPickerComponent);
