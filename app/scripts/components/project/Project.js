import React from 'react';
import ReactDOM from 'react-dom';


class Project extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>Project: {this.props.projectname}</h1>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}

export default Project
