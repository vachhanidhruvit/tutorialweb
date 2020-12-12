import React from 'react';
import Logo from './logo.png'

function Header() {
    return <>
        <div className="header">
            <img src={Logo} alt="logo" />
            <h1>Dhruvit Vachhani</h1>
        </div>
    </>
}

export default Header;