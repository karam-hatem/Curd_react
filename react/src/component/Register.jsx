import React from "react";
import UserService from './UserService';
import {Component} from "react";
import { Navigate } from 'react-router-dom';




class Register extends Component {

    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(event.target.inlineRadio.value);
        const user = {
            first_name :event.target.firstname.value, 
            last_name :event.target.lastname.value, 
            password :event.target.password.value, 
            email :event.target.youremail.value}
            console.log(user)
            UserService.createUser(JSON.stringify(user) );
            <Navigate to="/Login" />
        }



    render() {
    return(
          
    <div className="regestion-form">
        <h2 className="regester-h2">Register</h2>
        <form onSubmit={this.handleSubmit}>
        <input className="form-input" type="text" name="firstname" placeholder="First name" /><br />
        <input className="form-input" type="text" name="lastname" placeholder="Last name" /><br />
        <input className="form-input" type="email" name="youremail" placeholder="Your email" /><br />
        {/* <input className="form-input" type="text" name="username" placeholder="user name" /><br /> */}
        <input className="form-input" type="password" name="password" placeholder="Password" /><br />
        <input className="form-input" type="password" name="repassword" placeholder="Re-Password" /><br />
        <input className="btn" type="button" defaultValue="Sing up " />
        <button className="regester-h2" type="submit">Sing up</button>
        </form>
    </div>
    )
}
}

export default Register;