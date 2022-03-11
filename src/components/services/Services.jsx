import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h2>Services</h2>
          <div className='container services__container'>
             <article className='service'>
                 <div className='service__head'>
                     <h3>Developpement web</h3>
                 </div>

                 <ul className='service__list'>
                     <li>
                     <BiCheck className='service__list-icon' />
                     <p>Gestion de projets web, site vitrine, e-commerce</p>
                     </li>
                     <li>
                     <BiCheck className='service__list-icon' />
                     <p>Intégration web HTML /CSS respectueuses des standards du web</p>
                     </li>
                     <li>
                     <BiCheck className='service__list-icon' />
                     <p>Développements spécifiques, solutions personnalisées</p>
                     </li>
                     <li>
                     <BiCheck className='service__list-icon' />
                     <p>Référencement naturel, SEO, accessibilité et performances optimisés</p>
                     </li>
                     <li>
                     <BiCheck className='service__list-icon' />
                     <p>Responsive design, compatible tous supports, tablette & mobile</p>
                     </li>
                 </ul>
             </article> 
          </div>  
        </section>
    );
};

export default Services;