import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            {/* <h5>Apprendre à</h5> */}
            <h2>Me connaître</h2>

         <div className='container about__container'>
            {/* <div className='about__me'>
            <div className='about__me-image'>
                <img src={ME} alt='About Image' />
            </div>
            </div> */}
            <div className='about__content'>
            <div className='about__cards'>
                <article className='about__card'>
                <FaAward className='about__icon'/>
                   <p>Experience</p>
                   
                   <small></small>
                </article>

                <article className='about__card'>
                <FiUsers className='about__icon'/>
                   <p>Clients</p>
                   <small></small>
                </article>

                <article className='about__card'>
                <VscFolderActive className='about__icon'/>
                   <p>Projects</p>
                   <small>10+ Completed</small>
                </article>
            </div>
            <p>
            Bonjour, je m'appelle Romain, je suis développeur web junior, 
            vous pouvez télécharger mon cv un peu plus haut pour en savoir plus sur mon parcours.
            Je travaille toujours avec rigueur et minutie pour un résultat à la hauteur des attentes fixées
            </p>
            <a href='#contact' className='btn btn-primary'>Me contacter</a>
            </div>
         </div>
        </section>
    );
};

export default About;