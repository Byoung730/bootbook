import React                from 'react';

import HeaderCardComponent  from './HeaderCardComponent';
import PostStatusComponent  from './PostStatusComponent';
import StatusesComponent    from './StatusesComponent';
import ViewPickerComponent  from './ViewPickerComponent';


class RootComponent extends React.Component {
    constructor() {
        super();

        this.postStatus = this.postStatus.bind(this);
        this.removeStatus = this.removeStatus.bind(this);

        this.statusId = 1;

        this.state = {activeView: 'MY_STATUSES', statuses: []};
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
        const {activeView, statuses} = this.state;

        return (
            <div className="container">

                <h1>
                    <span className="label label-primary">
                        <span className="fa fa-book" aria-hidden="true" />
                        <span> Bootbook</span>
                    </span>
                </h1>
                <br />

                <HeaderCardComponent name="Ben Thiele" />

                <ViewPickerComponent activeView={activeView} />

                <PostStatusComponent postStatus={this.postStatus} />
                <StatusesComponent statuses={statuses} removeStatus={this.removeStatus} />
            </div>
        );
    }
}

RootComponent.displayName = 'RootComponent';

export default RootComponent;
