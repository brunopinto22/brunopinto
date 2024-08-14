import './skills.scss';
import React from 'react';

import Card from './Card/card';
import { Circle } from '../Icons';
import { SkillData } from '../../data';

function Skills(props) {


  return (
    <section id="skills">

      <div className="title">
        <h1>what i can <span className="accent"><span>do</span><Circle /></span></h1>
      </div>

      <div className="content">

        {SkillData.map((element, index) => (
          <Card key={index} title={element.title} data={element.skills} mouse={props.mousePos} />
        ))}

      </div>

    </section>
  );
}

export default Skills;