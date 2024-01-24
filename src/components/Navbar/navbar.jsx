import React, { useEffect } from 'react';
import './navbar.scss';

import { MainInfo } from '../../data';


function Navbar(props) {

  return (
    <nav id="nav">
      <div className="blur" />
      <div className="content">
        <div className="logo">
          <a href="">
            <h1 className="title-font">{MainInfo.name}</h1>
          </a>
        </div>
        <div className="links">
          <a className="link" href='#skills'>skills</a>
          <a className="link" href='#xp'>xp</a>
          <a className="link" href='#'>work</a>
          <a className="link" href='#'>about</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
