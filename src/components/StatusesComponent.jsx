import React        from 'react';
import PropTypes    from 'prop-types';


const StatusesComponent = ({statuses}) => (
    <div>
        {statuses && statuses.length > 0
            ? statuses.map(status => (
                <div key={status.id} className="list-group-item">
                    {status.text}
                </div>
            )) : (
                <div className="well well-sm">
                    <span>You have not posted any statuses </span>
                    <span className="fa fa-frown-o" aria-hidden="true" />
                </div>
            )
        }
    </div>
);

StatusesComponent.displayName = 'StatusesComponent';

StatusesComponent.propTypes = {
    statuses: PropTypes.array
};

export default StatusesComponent;
