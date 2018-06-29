import Immutable from 'immutable';

export const ReposRecord = Immutable.Record({
    status: null,
    error: null,
    value: null
});

export default (state = new ReposRecord(), action) => {
    switch (action.type) {
        case 'REPOS_FETCHING':
            return state.set('status', 'FETCHING');

        case 'REPOS_SUCCESS':
            return new ReposRecord({
                status: 'SUCCESS',
                error: null,
                value: action.response
            });

        case 'REPOS_ERROR':
            return new ReposRecord({
                status: 'ERROR',
                error: action.error
            });

        default:
            return state;
    }
};
