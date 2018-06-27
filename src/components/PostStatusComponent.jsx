import React from 'react';


class PostStatusComponent extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="post-status-input">Post Status:</label>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="post-status-input"
                        placeholder="Post a status..."
                    />

                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default">
                            Post
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

PostStatusComponent.displayName = 'PostStatusComponent';

export default PostStatusComponent;
