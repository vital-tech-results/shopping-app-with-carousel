import React from 'react';


// simple not found component 
const Header = () => {
    return (
        <header className="container">

            <div className="nav middle-menu"><img src="./img/logo.png" alt="" /></div>
            <div className="nav left-menu">
                <a href="https://anatta.io/" className="item">Men</a>
                <a href="https://anatta.io/" className="item">Women</a>
            </div>
            <div className="nav right-menu">
                <a href="https://anatta.io/" className="item">About</a>
                <a href="https://anatta.io/" className="item"><i className="fas fa-user"></i></a>
                <a href="https://anatta.io/" className="item"><i className="fas fa-shopping-bag"></i></a>
            </div>
        </header >

    )
}

export default Header;