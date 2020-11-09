import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__top">
                <div className="container flex-sb">
                    <div className="left__content">
                        <p>Phone number</p>
                    </div>
                    <div className="right__content">
                        <div className="auth__box">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Login</Link>
                        </div>
                        <div className="change__language">
                            <p>Change Language</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;