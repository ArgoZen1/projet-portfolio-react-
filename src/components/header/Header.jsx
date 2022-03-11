import React from 'react';
import './header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
              <h1>Bonjour,<br />moi c'est Romain,<br />développeur web</h1>
              <CTA />
              <HeaderSocials />
            </div>
        </header>
    );
};

export default Header;