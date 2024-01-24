import './dot.scss';
import React, { useEffect, useRef, useState } from 'react';

const BIG_SIZE = 160;
const SMALL_SIZE = 10;
const PER_PX = 0.6;

function Dot(props) {
  const [size, setSize] = useState(SMALL_SIZE);
  const dotRef = useRef();

  useEffect(() => {

    if(props.isHovered && dotRef.current){
      const {x, y} = props.mousePos;
      const {x: dotX, y:dotY} = dotRef.current.getBoundingClientRect();

      const distance = Math.sqrt(
        Math.pow(Math.abs(x - dotX),2) + Math.pow(Math.abs(y - dotY),2)
      )

      setSize(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
    }
    else if(!props.isHovered)
      setSize(SMALL_SIZE);

  }, [props.mousePos, props.isHovered]);

  return (
    <div ref={dotRef} className="dot" style={{width: size+'%', height: size+'%'}}>
    </div>
  );
}

export default Dot;