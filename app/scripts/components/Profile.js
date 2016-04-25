import React from 'react';
import { Router, Route, Link} from 'react-router';
import Bio from './project/Bio.js'
import Event from './project/Event.js'
import Rebase from 're-base'

// const base = Rebase.createClass('https://omonk.firebaseio.com/');

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: ['First Note'],
            name: "Oliver Monk",
            events: [1, 2, 3],
            bio: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris']
        }
    }

    componentDidMount() {
        this.init(this.props.username)
    }

    componentWillReceiveProps(nextProps) {
        // base.removeBinding(this.ref);
        this.init(nextProps.params.name);
    }

    componentWillUnmount() {
        // base.removeBiding(this.ref);
    }

    handleAddEvent() {

    }

    init(username) {
        // this.ref = base.bindToState(name, {
        //     context: this,
        //     asArray: true,
        //     state: 'name'
        // });
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <Bio name={this.state.name} bio={this.state.bio}/>
                </div>
                <div className="col-4">
                    <Event events={this.state.events}/>
                </div>
            </div>
        )
    }
}

export default Profile
