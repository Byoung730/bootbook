import React                from 'react';

import HeaderCardComponent  from './HeaderCardComponent';
import PostStatusComponent  from './PostStatusComponent';
import StatusesComponent    from './StatusesComponent';


class RootComponent extends React.Component {
    constructor() {
        super();

        this.state = {statuses: [{text: 'Our first status'}]};
    }

    render() {
        const {statuses} = this.state;

        return (
            <div className="container">
                <h1>Bootbook</h1>

                <HeaderCardComponent name="Ben Thiele" />
                <PostStatusComponent />
                <StatusesComponent statuses={statuses} />
            </div>
        );
    }
}

RootComponent.displayName = 'RootComponent';

export default RootComponent;
