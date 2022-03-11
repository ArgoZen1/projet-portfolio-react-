import React from 'react';
import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tmihuwo', 'template_wd65c1f', form.current, 'sM1a-NJ1xHRkv2TkB')

        
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              window.confirm("Votre message a bien été envoyé")
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id='contact'>
            {/* <h5>Entrer en contact</h5> */}
            <h2>Contactez-moi</h2>

            <div className='container contact__container'>
               <div className='contact__options'>
                 <article className='contact__option'>
                   <MdOutlineMailOutline className='contact__option-icon'/>
                    <h3>Email</h3>
                    <h4>argozen.dev@gmail.com</h4>
                    <a href='mailto:argozen.dev@gmail.com'>Envoyer un message</a> 
                 </article>
                 <article className='contact__option'>
                   <RiMessengerLine className='contact__option-icon'/>
                    <h3>Messenger</h3>
                    <h4>ArgoZen</h4>
                    <a href='https://m.me/romain.ares.9/'>Envoyer un message</a> 
                 </article>
                 
               </div>
               <form ref={form} onSubmit={sendEmail}>
                   <input type="text" name='name' id='name' placeholder='Votre nom complet' aria-label='Votre nom complet' required />
                   <input type="email" name='email' placeholder='Votre Email' aria-label='Votre email' required />
                   <textarea name='message' rows='7' placeholder='Votre message' aria-label='Votre message' required ></textarea>
                   <button type='submit' className='btn btn-primary'>Envoyer</button>
               </form>
            </div>
        </section>
    );
};

export default Contact;