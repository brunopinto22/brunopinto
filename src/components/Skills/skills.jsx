import './skills.scss';
import React from 'react';

import Card from './Card/card';
import { Circle } from '../Icons';

function Skills(props) {

  const coding = [
    { name: 'C', number: 95 },
    { name: 'C++', number: 55 },
    { name: 'Java', number: 45 },
  ];

  const web = [
    { name: 'HTML', number: 98 },
    { name: 'CSS / SCSS', number: 96 },
    { name: 'JavaScript', number: 62 },
  ];

  const tools = [
    { name: 'React', number: 82 },
    { name: 'Adobe XD / Figma', number: 87 },
    { name: 'Blender', number: 68 },
    { name: 'Boostrap', number: 78 },
  ];


  return (
    <section id="skills">

      <div className="title">
        <h1>what i can <span className="accent"><span>do</span><Circle /></span></h1>
      </div>

      <div className="content">

        <Card title="Coding" data={coding} />

        <Card title="Web Development" data={web} />

        <Card title="Tools" data={tools} />

      </div>

    </section>
  );
}

export default Skills;