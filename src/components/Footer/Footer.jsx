import React from 'react';
import logoFooter from '../../assets/img/Signature.svg'
import './index.css';

const Footer = () => {

    return (
        <footer>
            <img src={logoFooter} className="logoFooter" alt="logo" />
            <p>© 2023 Vivien-Heitz. All rights reserved</p>
        </footer>
    );
};

export default Footer;