import React from 'react';
import '../stylesheets/home.scss';

const Home = () => {
    return (
        <div className="container d-flex">
            <img className="home-logo" src="logotext.png" alt="logo" ></img>
            <div className="home-text">
                <p>Hello, I'm</p>
                <h1>Jeroen Zwart</h1>
                <h3>Berlin based developer</h3>
                <h2>Focused on beautiful digital products</h2>
            </div>
        </div>
    )

}

export default Home; 