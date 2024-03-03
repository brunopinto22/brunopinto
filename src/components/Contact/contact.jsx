import React, { useState } from 'react';
import './contact.scss';

import { MainInfo } from '../../data';
import { Underline, Mail, Instagram, Linkedin, Discord } from '../Icons';

function Contact(props) {
  const [backgroundClassName, setBackgroundClassName] = useState('default');

  const handleMouseEnter = (className) => {
    setBackgroundClassName(className);
  };
  const handleMouseLeave = () => {
    setBackgroundClassName('default');
  };

  return (
    <section id="contact">

      <div className={`background + ${backgroundClassName}`}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className="content">

        <div className="title">
          <h1>Let's Create <span className={`accent ${backgroundClassName}`}><span>Something</span><Underline /></span></h1>
        </div>

        <div className="links">

          <a href={`mailto:${MainInfo.links.mail}`} onMouseEnter={() => handleMouseEnter('email')} onMouseLeave={handleMouseLeave}>
            <Mail />email
          </a>

          <a href={MainInfo.links.instagram} target='_blank' onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={handleMouseLeave}>
            <Instagram />instagram
          </a>

          <a href={MainInfo.links.linkedin} target='_blank' onMouseEnter={() => handleMouseEnter('linkedin')} onMouseLeave={handleMouseLeave}>
            <Linkedin />linkedin
          </a>

          <a href={MainInfo.links.discord} target='_blank' onMouseEnter={() => handleMouseEnter('discord')} onMouseLeave={handleMouseLeave}>
            <Discord />discord
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
