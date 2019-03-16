import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Todo from './Todo';
import Logout from './Logout';

import '../css/main.css';


//routing
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Profile} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/todo" component={Todo} />
                        <Route path='/logout' component={Logout} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
