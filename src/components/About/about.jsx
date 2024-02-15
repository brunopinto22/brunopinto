import React, { useEffect } from 'react';
import './about.scss';

import { MainInfo } from '../../data';

function About(props) {

  return (
    <section id="about">
      <div className="title">
        <h1>Do <span className="accent">I Know</span> You?</h1>
      </div>

      <div className="container">

        <img src="img/pfp.png" alt="profile_picture" />

        <div className="text">
          <p className='title'>Hi I'm <span className="title-font">{MainInfo.name}</span> , nice to meet you!</p>
          <p>I'm a <span className="accent">Portuguese</span> Developer that started to get in love with Coding in High School during my professional course where I did an internship at <a href="">Critec</a> and learned more about web development and fell in love with it.</p>
          <p>After the Course I decided to follow my passion for <span className="accent">Computer Science</span> and pursued Computer Science at <a href="">ISEC</a>.</p> <br />
          <p>Along the way I made some projects that can be seen in my <a href="">GitHub</a> account.</p> <br />
          <p>But enought about my studies and professional life.</p>
          <p>What about my hobbies?</p> <br />
          <p>I love <span className="accent">drawing</span> and <span className="accent">image manipulation</span>, I have my drawings on my dedicaded Instagram: <a href="">@pintoiguess</a>.</p>
        </div>

      </div>
      
    </section>
  );
}

export default About;
