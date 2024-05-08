import './hero.scss';
import React, { useState } from 'react';
import Typed from 'typed.js';

import Avatar from './avatar/avatar';
import Dot from './dot/dot';

import { MainInfo } from '../../data';
import { Arrow, GitHub, Linkedin, Mail } from '../Icons';

function Hero(props) {
  const [isHovered, setIsHovered] = useState(false);

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: MainInfo.roles,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      loopCount: Infinity,
    });
    return () => { typed.destroy(); };
  }, []);


  return (
    <header
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

      <div className="hero-text">
        <h2>Hi, I'm <span className="title-font">{MainInfo.name}</span></h2>
        <br/>
        <h2>I'm a <span id="typed" className="accent-font secundary-accent" ref={el}></span></h2>
        <a className="primary-button" href="#contact">Let's work together!</a>
        <div className="socials">
          <a target='_blank' href={`mailto:${MainInfo.links.mail}`}><Mail /></a>
          <a target='_blank' href={MainInfo.links.gihub}><GitHub/></a>
          <a target='_blank' href={MainInfo.links.linkedin}><Linkedin/></a>
        </div>
      </div>

      <div className="hero-avatar no-cursor">

        <div className="image">
          <Avatar />
        </div>

        <div className="dots-grid">
          { Array.from({ length: 13*13}, (_, i) => (
            <Dot key={i} mousePos={props.mousePos} isHovered={isHovered} />
          )) }
        </div>
        
      </div>

      <div className="scroll">
        <p>scroll down</p>
        <Arrow isBig={true}/>
      </div>

    </header>
  );
}

export default Hero;