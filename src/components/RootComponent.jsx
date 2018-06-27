import React                from 'react';

import HeaderCardComponent  from './HeaderCardComponent';
import PostStatusComponent  from './PostStatusComponent';
import StatusesComponent    from './StatusesComponent';


class RootComponent extends React.Component {
    constructor() {
        super();

        this.postStatus = this.postStatus.bind(this);
        this.removeStatus = this.removeStatus.bind(this);

        this.statusId = 1;

        this.state = {statuses: []};
    }

    postStatus(status) {
        const {statuses} = this.state;
        const newStatusObj = {id: this.statusId++, text: status};

        const newStatuses = statuses.concat(newStatusObj);

        this.setState({statuses: newStatuses});
    }

    removeStatus(event) {
        const {statuses} = this.state;
        const statusToRemove = Number(event.currentTarget.dataset.statusId);

        const newStatuses = statuses.filter(status => status.id !== statusToRemove);

        this.setState({statuses: newStatuses});
    }

    render() {
        const {statuses} = this.state;

        return (
            <div className="container">
                <h1>Bootbook</h1>

                <HeaderCardComponent name="Ben Thiele" />
                <PostStatusComponent postStatus={this.postStatus} />
                <StatusesComponent statuses={statuses} removeStatus={this.removeStatus} />
            </div>
        );
    }
}

RootComponent.displayName = 'RootComponent';

export default RootComponent;
