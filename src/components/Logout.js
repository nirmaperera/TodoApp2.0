import React from 'react';
import { NavLink } from 'react-router-dom';

const Logout = () => (
    <div className="container">
        <h1> You are logged out</h1>
        <div class="redirect">
            <NavLink to="/login"> Login</NavLink>
            <br />
            <NavLink to="/"> Back to Profile</NavLink>
        </div>

    </div>
);

export default Logout;
