import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import '../css/todo.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            value: ''
        };
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get('https://hunter-todo-api.herokuapp.com/todo-item', {
                headers: { sillyauth: this.props.location.state.cookie }
            })
            .then((response) => {
                console.log(response);
                this.setState({ todos: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSubmit = (event) => {
        console.log('you added', this.state.value);
        console.log(this.props.location.state.cookie);
        event.preventDefault();

        let payload = { 'content': this.state.value }
        let url = 'https://hunter-todo-api.herokuapp.com/todo-item';
        axios
            .post(url, payload, {
                headers: { sillyauth: this.props.location.state.cookie },
            })
            .then((response) => {
                console.log(response);
                console.log('Todo is added');
                this.getTodos();
            })
            .catch((error) => {
                console.log(error);
            });

        this.setState({ value: '' }); //clear the input
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleDelete = (todo) => {
        console.log(todo);
        let url = 'https://hunter-todo-api.herokuapp.com/todo-item/' + todo.id;
        axios
            .delete(url, {
                headers: { sillyauth: this.props.location.state.cookie }
            })
            .then((response) => {
                console.log('Todo is deleted');
                this.getTodos();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleComplete = (todo) => {
        console.log('completed', todo);
        let payload2 = { 'completed': true }

        let url = 'https://hunter-todo-api.herokuapp.com/todo-item/' + todo.id;
        axios
            .put(url, payload2, {
                headers: { sillyauth: this.props.location.state.cookie }
            })
            .then((response) => {
                console.log('Todo is completed');
                this.getTodos();
            })
            .catch((error) => {
                console.log(error);
            });

    };


    render() {
        return (
            <div>
                <h1 className="nameHeader"> Hello, {this.props.location.state.username} !</h1>;
				<div className="container">
                    <div className="logout">
                        <NavLink to="/logout"> <button><i className="fas fa-sign-out-alt"></i></button></NavLink>
                    </div>
                    <h3> To-Dos <i className="fas fa-pencil-alt"></i></h3>
                    <hr />
                    {this.state.todos.map((todo) => (
                        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> {todo.content}
                            <button onClick={() => { this.handleComplete(todo); }}><i className="fas fa-check"></i></button>
                            <button onClick={() => { this.handleDelete(todo); }}> <i className="fas fa-trash-alt"></i> </button>
                        </li>
                    ))}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Add" />
                    </form>
                </div>

            </div>
        );
    }
}

export default withRouter(Todo);
