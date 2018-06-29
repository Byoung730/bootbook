import React from 'react';
import PropTypes from 'prop-types';
import HeaderCardComponent from './HeaderCardComponent';
import PostStatusContainer from '../containers/PostStatusContainer';
import StatusesContainer from '../containers/StatusesContainer';
import ViewPickerContainer from '../containers/ViewPickerContainer';
import ReposContainer from '../containers/ReposContainer';

const RootComponent = ({activeView}) => (
    <div className="container">
        <h1>
            <span className="label label-primary">
                <span className="fa fa-book" aria-hidden="true" />
                <span> Bootbook</span>
            </span>
        </h1>
        <br />

        <HeaderCardComponent name="Brian is a Champion" />

        <ViewPickerContainer />

        {activeView === 'MY_STATUSES' && (
            <div>
                <PostStatusContainer />
                <StatusesContainer />
            </div>
        )}
        {activeView === 'MY_REPOS' && <ReposContainer />}
    </div>
);

RootComponent.displayName = 'RootComponent';

RootComponent.propTypes = {
    activeView: PropTypes.string.isRequired
};

export default RootComponent;
