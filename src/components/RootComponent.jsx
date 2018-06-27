import React                from 'react';

import HeaderCardComponent  from './HeaderCardComponent';


class RootComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Bootbook</h1>

                <HeaderCardComponent name="Ben Thiele" />
            </div>
        );
    }
}

RootComponent.displayName = 'RootComponent';

export default RootComponent;