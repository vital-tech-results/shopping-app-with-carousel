import React from 'react';
import Carousel from 'nuka-carousel';

// simple not found component 
const Header = () => {
    return (
            <header>
                <div className="container">
                    <div className="logo"><img src="./img/logo.png" alt="" /></div>
                    <a href="https://anatta.io/" className="item">Men</a>
                    <a href="https://anatta.io/" className="item">Women</a>
                    <a href="https://anatta.io/" className="item">About</a>
                    <a href="https://anatta.io/" className="item"><i className="fas fa-user"></i></a>
                    <a href="https://anatta.io/" className="item"><i className="fas fa-shopping-bag"></i></a>
                </div>
            </header>
       
    )
}

export default Header;