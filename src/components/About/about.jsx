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
          <p>I'm a <span className="accent">Portuguese</span> Developer that started to get in love with Coding in High School during my professional course where I did an internship at <a href="https://www.critec.pt" target='_blank'>Critec</a> and learned more about web development and fell in love with it.</p>
          <p>After the Course I decided to follow my passion for <span className="accent">Computer Science</span> and pursued Computer Science at <a href="https://www.isec.pt/PT/Default.aspx" target='_blank'>ISEC</a>.</p> <br />
          <p>Along the way I made some projects that can be seen in my <a href={MainInfo.links.gihub} target='_blank'>GitHub</a> account.</p> <br />
          <p>But enought about my studies and professional life.</p>
          <p>What about my hobbies?</p> <br />
          <p>I love <span className="accent">drawing</span> and <span className="accent">image manipulation</span>, I have my drawings on my dedicaded Instagram: <a href="https://www.instagram.com/pintoiguess" target='_blank'>@pintoiguess</a>.</p>
        </div>

      </div>
      
    </section>
  );
}

export default About;
