import "./App.scss";
import React, { useState, useEffect } from 'react';

import { MainInfo } from "./data";
import { Navbar, Footer, Hover, Hero, Skills, Experience, Work, About } from "./components";

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

  return (
    <>

      <Navbar />
      
      <Hero mousePos={mousePos} />

      <Hover mousePos={mousePos} text={hoverText} onHover={onHover} />

      <Skills />

      <Experience setHoverText={setHoverText} setOnHover={setOnHover} />

      <Work setHoverText={setHoverText} setOnHover={setOnHover} />

      <About />

      <Footer />

    </>
  );
}

export default App;
