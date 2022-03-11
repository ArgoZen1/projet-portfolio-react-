import React from 'react';
import './portfolio.css'
import Booki from '../../assets/booki-res-comp.webp'
import OhMyFood from '../../assets/ohmyfood-comp.webp'
import LaChouette from '../../assets/lachouette2-comp.webp'
import Kanap from '../../assets/kanap-comp1.webp'
import Piquante from '../../assets/piquante-comp.webp'
import Groupomania from '../../assets/groupomania-comp.webp'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            {/* <h5>Mes projets</h5> */}
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={Booki} alt="Projet Booki, site web" />

                   </div>
                   <h3>Booki, site web vitrine en HTML/CSS</h3> 
                </article>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={OhMyFood} alt="Projet OhMyFood, site web" />

                   </div>
                   <h3>OhMyFood, site web HTML/CSS, animations CSS avancées avec SASS</h3> 
                </article>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={LaChouette} alt="Projet La chouette agence, site web" />

                   </div>
                   <h3>La Chouette agence, optimisations d'un site web, SEO, performance, accessibilité</h3> 
                </article>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={Kanap} alt="Projet Kanap, site web" />

                   </div>
                   <h3>Kanap, site e-commerce en JavaScript</h3> 
                </article>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={Piquante} alt="Projet Piquante, site web" />

                   </div>
                   <h3>Piquante, contruction d'une API sécurisée. Réalisation de la partie back-end</h3> 
                </article>
                <article className='portfolio__item'>
                   <div className='portfolio__item-image'>
                   <img src={Groupomania} alt="Projet Groupomania, site web" />

                   </div>
                   <h3>Groupomania, réalisation d'un reseau social d'entreprise avec React, SASS, Node JS, MySQL</h3> 
                </article>
            </div>
        </section>
    );
};

export default Portfolio;