export default (state = '', action) => {
    switch (action.type) {
        case 'POST_NEW_STATUS':
            return action.status;
        default:
            return state;
    }
};
