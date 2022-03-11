import React from 'react';
import './footer.css';
import {ImFacebook} from 'react-icons/im'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Arès Romain</a>

            <ul className='permalinks'>
                <li><a href='#'>Accueil</a></li>
                <li><a href='#about'>À propos de moi</a></li>
                <li><a href='#experience'>Expérience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a aria-label='Facebook' href='https://facebook.com'><ImFacebook/></a>
                <a aria-label='Instagram' href='https://instagram.com'><FiInstagram/></a>
                <a aria-label='Twitter' className="linkTwitter" href='https://twitter.com'><FiTwitter/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Arès Romain. Tous droits réservés.</small>
            </div>
        </footer>
    );
};

export default Footer;