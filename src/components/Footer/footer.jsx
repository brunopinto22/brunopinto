import './footer.scss';
import React, { useState } from 'react';

import { MainInfo, ExperienceData } from '../../data';

function Footer(props) {

  return (
    <footer>

      <div className="content">
        
        <div>
          <h1 className="title">Links</h1>
          <a className="link" href="#">Home</a>
          <a className="link" href="#skills">Skills</a>
          <a className="link" href="#xp">Experience</a>
          <a className="link" href="#">Work</a>
          <a className="link" href="#">About</a>
          <a className="link" href="#">Contact</a>
        </div>
        
        <div>
          <h1 className="title">Accounts</h1>
          <a className="link" target="_blank" href={MainInfo.links.linkedin}>Linkedind</a>
          <a className="link" target="_blank" href={MainInfo.links.gihub}>GitHub</a>
          <a className="link" target="_blank" href={MainInfo.links.instagram}>Instagram</a>
          <a className="link" target="_blank" href={MainInfo.links.discord}>Discord</a>
          <a className="link" target="_blank" href={MainInfo.links.spotify}>Spotify</a>
        </div>

        <div>
          <h1 className="title">References</h1>
          {ExperienceData.map((item, index) => (
            <a className="link" target="_blank" href={item.link}>{item.place}</a>
          ))}
        </div>

        <div>
          <h1 className="title">Made With</h1>
          <p>React</p>
          <p>SCSS</p>
          <p>Figma</p>
          <p>Blender</p>
          <p className="accent">+99 Coffe Cups</p>
        </div>

        <div>
          <h1 className="title">~</h1>
          {MainInfo.playlist.map((item, index) => (
            <a className="link" target="_blank" href={item.link}>{item.name}</a>
          ))}
          <a className="link" target="_blank" href="#">eastereggs</a>          
        </div>
        
      </div>

      <div className="copy-right accent-font">
        <h3>@2023 : {MainInfo.username}</h3>
      </div>

    </footer>
  );
}

export default Footer;