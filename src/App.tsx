/* node module imports */
import React from 'react';

/* app imports */
import "./styles.scss";
import jumbotronBackgroundSrc from "./assets/images/jumbotron-background.jpg";
import { useAppCustomHook } from "./hooks";
import { CustomHookReturn } from "./hooks/types"

export const App: React.FC = (): JSX.Element => {
  /* invoke the custom hook and de-struct */
  let { parallaxed, jumbotronElementRef } = useAppCustomHook();

  return (
    <React.Fragment>
      <div className="jumbotronSection positionRelative" ref={jumbotronElementRef}>
        {/* The Parallax Element */}
        <div className="backgroundContainer" style={parallaxed}>
          <img src={jumbotronBackgroundSrc} className="bgImage"
          alt="Chocoloate Muffin Image" title="Chocolate Muffin Image"/>
        </div>
        {/* Text Element */}
        <div className="posContainer">
          <h1>The Parallax Bakery</h1>
          <p>A bad day spent baking is better than a good day doing anything else</p>
        </div>
      </div>
    </React.Fragment>
  );
};
