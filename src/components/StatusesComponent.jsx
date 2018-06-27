import React        from 'react';
import PropTypes    from 'prop-types';


const StatusesComponent = ({statuses, removeStatus}) => (
    <div>
        {statuses && statuses.length > 0
            ? statuses.map(status => (
                <div key={status.id} className="list-group-item">
                    {status.text}

                    <button
                        type="button"
                        className="close"
                        data-status-id={status.id}
                        aria-label="Delete Status"

                        onClick={removeStatus}
                    >
                        <span className="fa fa-close" aria-hidden="true" />
                    </button>
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
    statuses:       PropTypes.array,
    removeStatus:   PropTypes.func.isRequired
};

export default StatusesComponent;
