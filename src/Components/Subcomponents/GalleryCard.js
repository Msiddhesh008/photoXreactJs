import React from "react";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const GalleryCard = (props) => {
  /* 
  {
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  } */

  const options = {
    scale: 1.8,
    speed: 1000,
    max: 1,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    transition: true,
  };

  return (
    <Tilt className={"filter " + props.classNAme} options={options}>
      <img src={props.imgLink} width={310} height={210} alt="gallery images" />
    </Tilt>
  );
};

export default GalleryCard;
