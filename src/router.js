import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
import Login from '../src/Views/Login'
import Navbar from '../src/Views/Navbar'
import Profile from '../src/Views/Profile'
import Symptoms from '../src/Views/Symptoms'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/'exact component={Login} />
            <Route path='/app' component={Login}>
                <Route path='/map' component={Login} />
                <Route path='/profile' component={Login} />
                <Route path='/Symptoms' component={Login} />
            </Route>
            <Route path='/Navbar' component={Navbar} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Symptoms' component={Symptoms} />
        </Switch>
        </BrowserRouter>
    )
}