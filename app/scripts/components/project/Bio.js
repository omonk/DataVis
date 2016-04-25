import React from 'react';
import ReactDOM from 'react-dom';

class Bio extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}

export default Bio
