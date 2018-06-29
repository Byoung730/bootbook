import agent from 'superagent';

export const setActiveView = view => ({
    type: 'SET_ACTIVE_VIEW',
    view
});

export const postNewStatus = status => ({
    type: 'POST_NEW_STATUS',
    status
});

export const fetchRepos = () => dispatch => {
    dispatch(reposFetching());
    agent
        .get('https://github.platforms.engineering/api/v3/users/evrvj/repos')
        .set('Authorization', `bearer ${process.env.GITHUB_TOKEN}`)
        .end((err, res) => {
            if (err) {
                dispatch(reposError(err));
                return;
            }
            dispatch(reposSuccess(res.body));
        });
};

const createStatus = text => ({
    type: 'CREATE_STATUS',
    text
});

export const removeStatus = statusId => ({
    type: 'REMOVE_STATUS',
    statusId
});

const reposFetching = () => ({
    type: 'REPOS_FETCHING'
});

const reposSuccess = response => ({
    type: 'REPOS_SUCCESS',
    response
});

const reposError = error => ({
    type: 'REPOS_ERROR',
    error
});

export const createNewStatus = () => (dispatch, getState) => {
    const inputValue = getState().statusInputValue;
    if (!inputValue) {
        return;
    }

    dispatch(postNewStatus(''));
    dispatch(createStatus(inputValue));
};
