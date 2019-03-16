import React from 'react';


const Form = (props) => (
    <div>
        <hr />
        <br />
        <form onSubmit={props.getAuth}>
            <input type="text" placeholder="Enter Username" name="username" />
            <input type="submit" value="Enter" />
        </form>
    </div>
);

export default Form;
