import React from 'react';
import ReactDOM from 'react-dom';

class Events extends React.Component {
    constructor() {
        super()
    }

    render() {
        let rows = this.props.events.map( event => {
            return <Event key={event.id} data={event}/>
        })

        return (
            <ul>
                {/*{rows}*/}
                {this.props.events}
            </ul>
        )
    }
}

class Event extends React.Component {
    render() {
        return (
            <div className="event">
                {props.data.title}
            </div>
        )
    }
}

export default Events
