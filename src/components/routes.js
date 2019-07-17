import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import ClassList from './ClassList/ClassList';
import Student from './Student/Student';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classlist/:class" component={ClassList} />
        <Route path="/student/:id" component={Student} />
    </Switch>
)