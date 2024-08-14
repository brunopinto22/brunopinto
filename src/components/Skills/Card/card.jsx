import './card.scss';
import { useEffect, useRef, useState } from 'react';

import { useIsInViewport } from '../../../helpers';

const Card = ({ title, data, mouse }) => {
  const ref = useRef(null);

  const [inView, setInView] = useState(false);
  const isInView = useIsInViewport(ref);
  if(isInView != inView)
    setInView(isInView);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const bounds = ref.current.getBoundingClientRect();

    setX(mouse.x - bounds.left);
    setY(mouse.y - bounds.top);
  }, [mouse])

  return (
    <div className="skill-card" style={{ '--x': x + 'px', '--y': y + 'px'}}>
      <div className="card-content">

        <h1 className="card-title">{title}</h1>

        <div className="progress-container" ref={ref}>

        {data.map((item, index) => (
          <div className="progress-item" key={index}>

            {item.link === "" ? (<h2>{item.name}</h2>) : (<h2><a className="link" target='_blank' href={item.link}>{item.name}</a></h2>)}

            <div className="pr-container"><div className="pr" style={{ width: (inView ? item.percentage : 0) + '%' }}></div></div>

          </div>
        ))}
        
        </div>

      </div>
    </div>
  );
}

export default Card;