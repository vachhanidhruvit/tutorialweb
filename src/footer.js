import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return <>
        <footer>
            <p>All Copyrights are Reserved @{year}</p>
        </footer>
    </>

}

export default Footer;