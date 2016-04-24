import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="topNav"></div>
                <div className="container">
                {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main
