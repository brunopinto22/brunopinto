import './about.scss';
import React, { useEffect, useState } from 'react';

import { MainInfo } from '../../data';
import clickSound from '../../assets/sounds/click.mp3';

function About(props) {

  const [pfp, setPfp] = useState(MainInfo.pfp);
  
  const handleClick = () => {

    const audio = new Audio(clickSound);
    audio.play();

    if(pfp === MainInfo.pfp)
      setPfp(MainInfo.pfp_alt);
    else
      setPfp(MainInfo.pfp);
  }

  
  const handleMouseEnter = (x) => {
    props.setHoverText(x);
    props.setOnHover(true);
  };

  const handleMouseLeave = () => {
    props.setOnHover(false);
  };

  return (
    <section id="about">
      <div className="title">
        <h1>Do <span className="accent">I Know</span> You?</h1>
      </div>

      <div className="container">

        <div
          className="pfp no-cursor hover"
          style={{backgroundImage: `url(img/${pfp})`}}

          onMouseEnter={() => handleMouseEnter('👀')}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />

        <div className="text">
          <p className='title'>Hi I'm <span className="title-font">{MainInfo.name}</span> , nice to meet you!</p>
          <p>I'm a <span className="accent">Portuguese Developer</span> who fell in love with coding early on. My passion for tech has led me to work on exciting projects and explore various aspects of Computer Science, such as an interneship at <a href="https://www.critec.pt/inicio" target="_blank" className="link">Critec</a> and a Bachelor's Degree in Computer Science at <a href="http://www.isec.pt" target="_blank" className="link">ISEC</a>.</p>
          <br />
          <p>When I’m not coding, you might find me enjoying a coffee and hanging out with friends or creating <span className="accent">art</span> (check out my artwork on Instagram: <a href="https://www.instagram.com/pintoiguess/" target="_blank" className="link">@pintoiguess</a>).</p>
          <p><i>— who doesn’t love a bit of self-advertising?</i></p>
          <br />
          <p>Feel free to connect with me so we can <a href="#contact" className="link">Create</a>!</p>
        </div>

      </div>
      
    </section>
  );
}

export default About;
