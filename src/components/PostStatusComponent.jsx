import React        from 'react';
import PropTypes    from 'prop-types';


class PostStatusComponent extends React.Component {
    constructor() {
        super();

        this.onStatusChange = this.onStatusChange.bind(this);
        this.onPostClick = this.onPostClick.bind(this);

        this.state = {status: ''};
    }

    onStatusChange(event) {
        this.setState({status: event.target.value});
    }

    onPostClick() {
        const {status} = this.state;
        const {postStatus} = this.props;

        postStatus(status);

        this.setState({status: ''});
        document.getElementById('post-status-input').focus();
    }

    render() {
        const {status} = this.state;

        return (
            <div className="form-group">
                <label htmlFor="post-status-input">Post Status:</label>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="post-status-input"
                        placeholder="Post a status..."
                        value={status}

                        onChange={this.onStatusChange}
                    />

                    <span className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-default"

                            onClick={this.onPostClick}
                        >
                            Post
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

PostStatusComponent.displayName = 'PostStatusComponent';

PostStatusComponent.propTypes = {
    postStatus: PropTypes.func.isRequired
};

export default PostStatusComponent;
