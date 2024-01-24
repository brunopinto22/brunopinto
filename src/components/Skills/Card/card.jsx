import './card.scss';
import { useRef, useState } from 'react';

import { useIsInViewport } from '../../../helpers';

const Card = ({ title, data }) => {
  const ref = useRef(null);

  const [inView, setInView] = useState(false);
  const isInView = useIsInViewport(ref);
  if(isInView != inView)
    setInView(isInView);

  return (
    <div className="skill-card">
      <div className="card-content">

        <h1 className="card-title">{title}</h1>

        <div className="progress-container" ref={ref}>

        {data.map((item, index) => (
          <div className="progress-item" key={index}>
            <h2>{item.name}</h2>
            <div className="pr-container"><div className="pr" style={{ width: (inView ? item.number : 0) + '%' }}></div></div>
          </div>
        ))}
        
        </div>

      </div>
    </div>
  );
}

export default Card;