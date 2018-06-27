import React                from 'react';

import HeaderCardComponent  from './HeaderCardComponent';
import PostStatusComponent  from './PostStatusComponent';


class RootComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Bootbook</h1>

                <HeaderCardComponent name="Ben Thiele" />
                <PostStatusComponent />
            </div>
        );
    }
}

RootComponent.displayName = 'RootComponent';

export default RootComponent;
