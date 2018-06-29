import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import SingleStatusContainer from '../containers/SingleStatusContainer';

const StatusesComponent = ({statuses}) => (
    <div>
        {statuses.size > 0 ? (
            statuses
                .toArray()
                .map(status => (
                    <SingleStatusContainer key={status.id} status={status} />
                ))
        ) : (
            <div className="well well-sm">
                <span>You have not posted any statuses </span>
                <span className="fa fa-frown-o" aria-hidden="true" />
            </div>
        )}
    </div>
);

StatusesComponent.displayName = 'StatusesComponent';

StatusesComponent.propTypes = {
    statuses: PropTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default StatusesComponent;
