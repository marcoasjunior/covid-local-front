import {BrowserRouter, Route, Switch} from 'react-router-dom'

import React from 'react';
import Login from '../src/Views/Login'
import Navbar from '../src/Views/Navbar'
import Profile from '../src/Views/Profile'
import Symptoms from '../src/Views/Symptoms'
import Register from '../src/Views/Register'
import Mapa from './Views/Mapa'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/'exact component={Login} />
            <Route path='/register'exact component={Register} />
            <Route path='/app' component={Navbar} />
            <Switch>                 
                    <Route path='/app/Mapa' component={Mapa} />
                    <Route path='/app/Profile' component={Profile} />
                    <Route path='/app/Symptoms' component={Symptoms} />
                </Switch>
        </BrowserRouter>
    )
}