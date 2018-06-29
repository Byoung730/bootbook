import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const ReposComponent = ({repos}) => (
    <div>
        {repos.status === 'FETCHING' ? (
            <div className="alert alert-info">
                <span className="velocity-spinner-small-inline" />
                <span>Getting your repos... </span>
            </div>
        ) : repos.status === 'ERROR' ? (
            <div>
                <div>All bad fam --- error: </div>
                <div>
                    <strong>{repos.error.message}</strong>
                </div>
            </div>
        ) : repos.status === 'SUCCESS' ? (
            <ul className="list-group">
                {repos.value.map(repo => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        className="list-group-item"
                    >
                        {repo.name}
                    </a>
                ))}
            </ul>
        ) : null}
    </div>
);

ReposComponent.displayName = 'ReposComponent';

ReposComponent.propTypes = {
    repos: PropTypes.instanceOf(Immutable.Record).isRequired
};

export default ReposComponent;
