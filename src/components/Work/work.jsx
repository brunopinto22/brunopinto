import React, { useState } from 'react';
import './work.scss';

import { Underline } from '../Icons';
import { MainInfo, WorkData } from '../../data';

function Work(props) {

  const handleMouseEnter = () => {
    props.setHoverText("Check⌝");
    props.setOnHover(true);
  };

  const handleMouseLeave = () => {
    props.setOnHover(false);
  };

  return (
    <section id="work">
      <div className="title">
        <h1><span className="accent"><span>Wow</span><Underline /></span> I Did This</h1>
      </div>

      <div className="content">
        <div className="img-grid">
        {WorkData.map((item, index) => (
          item.url ? (
          <a
            key={index}
            className="img-container no-cursor"
            style={{backgroundImage: (item.img && `url(img/${item.img})`)}}
            href={item.url}
            target='_blank'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={"img/" + item.img} alt={item.img} />
          </a>
          ) : (
          <div
            key={index}
            className="img-container"
            style={{backgroundImage: (item.img && `url(img/${item.img})`)}}
          >
            <img src={"img/" + item.img} alt={item.img} />
          </div>
          )
          ))}
        </div>

        <a className="primary-button" href={MainInfo.links.gihub} target="_blank">More Projects</a>
      </div>
    </section>
  );
}

export default Work;
