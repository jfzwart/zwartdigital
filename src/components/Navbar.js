import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import '../stylesheets/navbar.scss'


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <Link to="/">
                    <img className="logo" src="/logo.png" alt="logo" ></img>
                    </Link>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                            <Link to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <Link to="/portfolio">
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>    
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                </ul>
                </div>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                        ) : (
                        <MenuIcon className="menu-icon" />
                    )}
            </div>
        </div>
    );
};

export default Header;