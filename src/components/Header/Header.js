import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1 id='h1'>Welcome to my Kingdom</h1>
            <div className='container'>
                <nav>
                    <a href="/Home">Home</a>
                    <a href="/Details">Details</a>
                    <a href="About US">About Us</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;