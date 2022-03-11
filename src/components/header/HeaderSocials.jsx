import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com'><BsLinkedin/>Linkedin</a>
            <a href='https://github.com'><GoMarkGithub/>Github</a>
            <a href='https://twitter.com'><BsTwitter/>Twitter</a>
        </div>
    );
};

export default HeaderSocials;