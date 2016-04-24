import React from 'react';
import Main from '../components/Main.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';
import { Router, Route, Link, IndexRoute} from 'react-router';


module.exports = (
    <Router path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Router path="profile/:project" component={Profile}></Router>
    </Router>
)
