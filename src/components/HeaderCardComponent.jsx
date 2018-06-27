import React from 'react';


class HeaderCardComponent extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <span className="h2">
                        <span className="fa fa-user text-primary" aria-hidden="true" />&nbsp;&nbsp;
                        Ben Thiele
                    </span>
                </div>
            </div>
        );
    }
}

HeaderCardComponent.displayName = 'HeaderCardComponent';

export default HeaderCardComponent;
