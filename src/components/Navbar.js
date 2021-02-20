import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar navbar-light header">
            <Link to="/" className="container-fluid brandlogo">ZwartDigital</Link>
            <div className="container-fluid navbar-buttons">
                <Link to="/"
                className="button">
                    <div className="button-text">
                    HOME
                    </div>
                </Link>
                <Link to="/portfolio"
                className="button">
                    <div className="button-text">
                    PORTFOLIO
                    </div>
                </Link>
                <Link to="/resume"
                className="button">
                    <div className="button-text">
                    RESUME
                    </div>
                </Link>
                <Link to="/contact"
                className="button">
                    <div className="button-text">
                    CONTACT
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;