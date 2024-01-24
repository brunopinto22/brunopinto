import './time-item.scss';
import React, {useEffect, useRef, useState, useMemo} from 'react';

const TimeItem = ({ firstYear, lastYear, title, place, placeLink, cover, text, references, setHoverText, setOnHover }) => {

  const handleMouseEnter = () => {
    setHoverText("Click");
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setHoverText("");
    setOnHover(false);
  };

  return (
    <div className="time-item">
      
      <div className="time-title">
        <h2>{firstYear} - {lastYear}</h2>
        <h1>{title} <span>@<a className="link" href={placeLink} target='_blank'>{place}</a></span></h1>
      </div>

      <div className="content-container">

        <div className="image-cover no-cursor hover"
          style={{backgroundImage: `url(${cover})`}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div className="content">
          <p>{text}</p>

          <div className="reference">
            <h1>References:</h1>
            {references.map((ref, index) => (
              <a key={index} href={ref.link} className="link">{ref.title}</a>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
  
}

export default TimeItem;