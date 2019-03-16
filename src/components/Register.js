import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import '../css/auth.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            cookie: undefined,
        };
    }

    getAuth = () => {
        axios
            .post('https://hunter-todo-api.herokuapp.com/auth', { username: this.state.username })
            .then((response) => {
                console.log(response);
                this.setState({ cookie: response.data.token });
                console.log('Your token:', this.state.cookie);
                console.log('Your username:', this.state.username);
                this.props.history.push({
                    pathname: '/todo',
                    state: { username: this.state.username, cookie: this.state.cookie }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username is: ', this.state.username);

        axios
            .post('https://hunter-todo-api.herokuapp.com/user', { username: this.state.username })
            .then((response) => {
                console.log(response);
                this.getAuth();

            })
            .catch((error) => {
                console.log(error);
            });


    }

    handleChange = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        console.log(this.state.username);
        return (
            <div className="container">
                <h1>Register</h1>
                <hr />
                <br />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} />
                    <input type="submit" value="Enter" />
                </form>

                <div className="redirect">
                    <NavLink to="/login"> Already have a account?</NavLink>
                    <NavLink to="/"> Back to Profile</NavLink>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);