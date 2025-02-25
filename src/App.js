import "./App.scss";
import React, { useState, useEffect } from 'react';

import { MainInfo } from "./data";
import { Navbar, Footer, Hover, Hero, Skills, Experience, Work, About, Contact, Loader } from "./components";

function App() {

  document.title = MainInfo.name;

  const [mousePos, setMousePos] = useState({x: 0, y:0});
  useEffect(() => {
    const updateMousePos = (e) => { setMousePos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener('mousemove', updateMousePos);

    return () => { window.removeEventListener('mousemove', updateMousePos); };
  }, []);

  const [onHover, setOnHover] = useState(false);
  const [hoverText, setHoverText] = useState('hover here');

  const [loading, setLoading] = useState(false);

  return (
    <>

      {loading ? <Loader setLoading={setLoading} timeout={3} fadeout={0.5} /> : <></> }

      <Navbar />
      
      <Hero mousePos={mousePos} />

      <Hover mousePos={mousePos} text={hoverText} onHover={onHover} />

      <Skills mousePos={mousePos} />

      <Experience setHoverText={setHoverText} setOnHover={setOnHover} />

      <Work setHoverText={setHoverText} setOnHover={setOnHover} />

      <About setHoverText={setHoverText} setOnHover={setOnHover} />

      <Contact mousePos={mousePos} />

      <Footer />

    </>
  );
}

export default App;
