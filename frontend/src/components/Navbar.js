import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* <h1>Event Management</h1> */}
            </div>
            <div className="navbar-right">
                {/* <Link to="/">Dashboard</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link> */}
            </div>
        </nav>
    );
};

export default Navbar;
