import React from 'react';
import { Router, Route, Link} from 'react-router';
import Project from './project/Project.js'
import Event from './project/Event.js'
import ReactFireMixin from 'reactfire'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: ['First Note'],
            projectname: "Oliver Bonas",
            // events: [{
            //         "id": 1,
            //         "name": "Simon Bailey"
            //     }, {
            //         "id": 2,
            //         "name": "Thomas Burleson"
            //     }, {
            //         "id": 3,
            //         "name": "Will Button"
            //     }
            // ],
            events: [1, 2, 3],
            bio: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris']
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <Project projectname={this.state.projectname} bio={this.state.bio}/>
                </div>
                <div className="col-4">
                    <Event events={this.state.events}/>
                </div>
            </div>
        )
    }
}

export default Profile
