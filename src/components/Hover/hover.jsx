import React, { useEffect, useState, useRef } from 'react';
import './hover.scss';

//import './script.js';

function Hover(props) {

  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    if (window.initScript)
      window.initScript();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div
      id="hover"
      className={`${props.onHover ? 'on' : 'out'}`}
      style={{ left: props.mousePos.x, top: props.mousePos.y + scrollPos}}
    >
      <div><p>{props.text}</p></div>
    </div>
  );
}

export default Hover;
