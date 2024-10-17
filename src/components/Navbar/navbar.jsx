import React, { useState } from 'react';
import './navbar.scss';

import { MainInfo } from '../../data';
import { Menu, Bullet } from '../Icons';


function Navbar(props) {

  const [show, setShow] = useState(false);
  const handleClick = () =>{ setShow(!show); }

  return (
    <>
    <nav id="nav">
      <div className="content">
        <div className="logo">
          <a href="#">
            <h1 className="title-font">{MainInfo.name}</h1>
          </a>
        </div>
        <div className="right">
          <div id="ham" onClick={handleClick}> <Menu /> </div>
        </div>
      </div>
    </nav>

    <div onClick={handleClick} className="bg" style={{opacity: show ? '1' : '0', pointerEvents: show ? '' : 'none'}}></div>
    <div className={`sidebar ${show ? '' : 'hide'}`}>

      <span onClick={handleClick}>
        <Bullet/>
      </span>
      
      <div className="content">
        <a className="link" href='#skills' onClick={handleClick}>skills</a>
        <a className="link" href='#xp' onClick={handleClick}>experience</a>
        <a className="link" href='#work' onClick={handleClick}>work</a>
        <a className="link" href='#about' onClick={handleClick}>about</a>
        <a className="link" href='#contact' onClick={handleClick}>contact</a>
      </div>

    </div>
    </>
  );
}

export default Navbar;
