import React, { useEffect, useState, useRef } from 'react';
import './work.scss';

import { Underline } from '../Icons';
import { MainInfo } from '../../data';

function Work() {

  return (
    <section id="work">
      <div className="title">
        <h1><span className="accent"><span>Wow</span><Underline /></span> I Did This</h1>
      </div>

      <div className="content">
        <div className="img-grid">
          <a className='div1'></a>
          <a className='div2' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
          <a className='div3' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
          <a className='div4' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
          <a className='div5' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
          <a className='div6' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
          <a className='div7' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGkAx0tDgoj6y7jAiVj1LtFwdxpoQBS1dqLE77dIc0g&s)" }}></a>
        </div>

        <a className="primary-button" href={MainInfo.links.gihub} target="_blank">More Projects</a>
      </div>
    </section>
  );
}

export default Work;
