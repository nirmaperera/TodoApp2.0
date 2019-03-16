import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div className="info">
                <h1>Nirma Perera</h1>
                <hr />
                <p>
                    {' '}
                    I am a student based in New York City. I am a senior at
					<a href="https://hunter.cuny.edu/"> Hunter College </a>
                    studying <a href="http://www.hunter.cuny.edu/csci">Computer Science</a> and minoring in Math. I am
					interested in front-end development as I believe it is important to create user interfaces that not
					only capture the business's vision but also appeal to users in a functional, pleasing, and clean
					matter. I recently started interning at <a href="https://narrativ.com/">Narrativ.</a>
                </p>
                <strong>In my free I like to:</strong>
                <ul>
                    <li>Draw and Design</li>
                    <li>To Travel</li>
                    <li>Read</li>
                </ul>
                <strong>
                    <span> Check out my Github: </span>
                </strong>
                <a href="https://github.com/nirmaperera">nirmaperera</a> <br />
                <strong>
                    <span>Want to contact me?</span>
                </strong>
                <address>
                    Email: <a href="mailto:nirma.perera70@myhunter.cuny.edu">nirma.perera70@myhunter.cuny.edu</a>
                </address>
                <button name="todo-link">
                    <NavLink to="/register"> TODO APP</NavLink>
                </button>
            </div>
        );
    }
}

export default Profile;
