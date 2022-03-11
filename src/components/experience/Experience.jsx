import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            {/* <h5>Mes Compétences</h5> */}
            <h2>Mon Expérience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Developpement Frontend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>CSS / SASS</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>REACT</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>SEO</h4>
                        </article>
                    </div>

                </div>
                <div className='experience__backend'>
                <h3>Developpement Backend</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>Node JS</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>MongoDB</h4>
                        </article>
                        <article className='experience__details'>
                        <BsFillPatchCheckFill className='experience__details-icon'/>
                            <h4>MySQL</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;