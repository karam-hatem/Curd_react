import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
 return (
    <div className="navbar">
            <div className="contaner">
            <a href="/" className="logo">Logo</a>
            <ul>

                <NavLink to="/View_User">View </NavLink>
                <NavLink to="/Add_User">Add </NavLink>
                <NavLink to="/">Register</NavLink>
                <NavLink to="/Login">Login</NavLink>
            </ul>
        </div>
    </div>
 )

}
export default Header;