import React, { useEffect, useState } from 'react';
import './loader.scss';

function Loader({setLoading, timeout, fadeout}) {

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {

      setOpacity(0);
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      
      setTimeout(() =>{setLoading(false)}, fadeout * 1000);

    }, timeout * 1000);

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      clearTimeout(timer);
    };
    
  }, []);

  return (
    <section id="loader" style={{'--time': fadeout + 's', opacity: opacity }}>

      <div class="loading">
        <svg width="64px" height="48px">
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
        </svg>
      </div>

    </section>
  );
}

export default Loader;
