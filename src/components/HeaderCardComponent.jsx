import React from 'react';
import PropTypes from 'prop-types';

const HeaderCardComponent = ({name}) => (
    <div className="panel panel-default">
        <div className="panel-body">
            <span className="h2">
                <span
                    className="fa fa-crosshairs text-primary"
                    aria-hidden="true"
                />&nbsp;&nbsp;
                {name}
            </span>
        </div>
    </div>
);

HeaderCardComponent.displayName = 'HeaderCardComponent';

HeaderCardComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default HeaderCardComponent;
