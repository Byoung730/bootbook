import React from 'react';
import PropTypes from 'prop-types';

const PostStatusComponent = ({status, statusFieldChange, postNewStatus}) => (
    <div className="form-group">
        <form onSubmit={event => event.preventDefault(postNewStatus())}>
            <label htmlFor="post-status-input">Post Status:</label>

            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    id="post-status-input"
                    placeholder="Post a status..."
                    value={status}
                    onChange={statusFieldChange}
                />

                <span className="input-group-btn">
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={postNewStatus}
                    >
                        Post
                    </button>
                </span>
            </div>
        </form>
    </div>
);

PostStatusComponent.displayName = 'PostStatusComponent';

PostStatusComponent.propTypes = {
    status: PropTypes.string.isRequired,
    statusFieldChange: PropTypes.func.isRequired,
    postNewStatus: PropTypes.func.isRequired
};

export default PostStatusComponent;
