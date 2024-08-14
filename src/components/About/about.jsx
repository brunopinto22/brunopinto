import React, { useEffect, useState } from 'react';
import './about.scss';

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
          <p>I'm a <span className="accent">Portuguese Developer</span> who fell in love with coding early on. My passion for tech has led me to work on exciting projects and explore various aspects of development.</p>
          <br />
          <p>When I’m not coding, you might find me enjoying a coffee and hanging out with friends, diving into <span className="accent">drawing and art</span>, check out my artwork on Instagram: <a href="https://www.instagram.com/pintoiguess/" target="_blank" className="link">@pintoiguess</a> <i>(who doesn’t love a bit of self-advertising?)</i>.</p>
          <p>No matter where I am, diving into songs and playlists. Music is my constant companion, whether I'm working, relaxing, or just going about my day — it’s always there to keep me inspired and energized.</p>
          <br />
          <p>Feel free to <a href="#contact" className="link">connect</a> with me and explore both my creative side and my love for life’s simple pleasures!</p>
        </div>

      </div>
      
    </section>
  );
}

export default About;
