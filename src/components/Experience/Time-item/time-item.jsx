import './time-item.scss';
import React, {useEffect, useRef, useState, useMemo} from 'react';
import Markdown from 'react-markdown';
import { useIsInViewport } from '../../../helpers';

import { Bullet } from '../../Icons';

const TimeItem = ({ firstYear, lastYear, title, place, placeLink, cover, text, references, gallery, setHoverText, setOnHover }) => {

  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (!gallery || gallery.length === 0) return;
    setShow(!show);

    document.body.style.overflow = show ? '' : 'hidden';
    setHoverText('Leave');
    setOnHover(!show);

  }

  const handleMouseEnter = (x) => {
    if (!gallery || gallery.length === 0) return;
    setHoverText(x);
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    if (!gallery || gallery.length === 0) return;
    setOnHover(false);
  };

  const ref = useRef(null);

  const [inView, setInView] = useState(false);
  const isInView = useIsInViewport(ref);
  if(isInView != inView)
    setInView(isInView);

  useEffect(() => {
    console.log(ref + " onView");
  }, [inView]);

  return (
    <div ref={ref} className={"time-item " + (inView ? "show" : "")}>

      {gallery.length > 0 && (
        <div className={"gallery no-cursor " + (show ? "show" : "hide")}
          onClick={handleClick} onMouseEnter={() => handleMouseEnter('Leave')} onMouseLeave={handleMouseLeave}
        >
          {gallery.map((item, index) => (
            <div key={index} style={{backgroundImage: `url(img/${item})`}}></div>
          ))}
        </div>
      )}
      
      <div className="time-title">
        <h2>{firstYear} {lastYear && `- ${lastYear}`}</h2>
        <h1>{title} <span>@<a className="link" href={placeLink} target='_blank'>{place}</a></span></h1>
      </div>

      <div className="content-container">

        <div className={"image-cover " + (gallery.length > 0 ? "no-cursor hover" : "")}
          style={{backgroundImage: `url(img/${cover})`}}
          onMouseEnter={() => handleMouseEnter('Click')}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />

        <div className="content">
          <p className="text"><Markdown>{text}</Markdown></p>

          {references.length > 0 && (
            <div className="links">
              <h1>Links:</h1>
              {references.map((ref, index) => (
                <a key={index} href={ref.link} className="link" target="_blank"><Bullet />{ref.title}</a>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
  
}

export default TimeItem;