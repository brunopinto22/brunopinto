import './experience.scss';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useIsInViewport } from '../../helpers';

import TimeItem from './Time-item/time-item';
import {ExperienceData} from '../../data';

function Experience(props) {
  const ref = useRef(null);

  const [inView, setInView] = useState(false);
  const isInView = useIsInViewport(ref);
  if(isInView != inView)
    setInView(isInView);

  useEffect(() => {
    console.log('xpInView:', inView);
  }, [inView]);

  return (
    <section id="xp" ref={ref}>

      {ExperienceData.map((item, index) => (

        <TimeItem key={index}

          firstYear={item.firstYear}
          lastYear={item.lastYear}
          title={item.title}
          place={item.place}
          placeLink={item.link}
          cover={item.cover}
          text={item.text}
          references={item.references}
          gallery={item.gallery}

          setHoverText={props.setHoverText}
          setOnHover={props.setOnHover}

        />

      ))}

    </section>
  );
}

export default Experience;
