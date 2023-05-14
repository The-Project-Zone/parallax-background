/* node module imports */
import React, { useEffect, useRef, useState } from 'react';

/* app import */
import { CustomHookReturn } from "./types"

export const useAppCustomHook = (): CustomHookReturn => {
  let [transformStyles, setTransformStyles] = useState<{x: number, y: number}>({x: 0, y: 0});
  let jumbotronElementRef = useRef<HTMLDivElement>(null);
  let parallaxed = {
    transform: `translate(${transformStyles.x}px, ${transformStyles.y}px)`
  };

  useEffect(() => {
    const jumbotronElement = jumbotronElementRef.current as HTMLDivElement;

    if (!jumbotronElement) {
      return;
    }

    function handlePositioning(pageXPos: number, pageYPos: number) {
      const speed = 100;
      setTransformStyles(() => {
        return {
          x: (window.innerWidth - (pageXPos * speed))/1000,
          y: (window.innerHeight - (pageYPos * speed))/1000,
        };
      });
    }

    /* on touch: mobiles and tablets */
    function handleOnTouchMove(event: TouchEvent) {
      const pageX = event.touches[0].clientX;
      const pageY = event.touches[0].clientY;
      handlePositioning(pageX, pageY);
    }

    /* on mouse: desktops */
    function handleOnMouseMove(event: MouseEvent) {
      const pageX = event.pageX;
      const pageY = event.pageY;
      handlePositioning(pageX, pageY);
    }

    jumbotronElement.addEventListener("mousemove", handleOnMouseMove);
    jumbotronElement.addEventListener("touchmove", handleOnTouchMove);
    return () => {
      jumbotronElement.removeEventListener("mousemove", handleOnMouseMove);
      jumbotronElement.removeEventListener("touchmove", handleOnTouchMove);
    };
  }, []);

  return {
    parallaxed,
    jumbotronElementRef
  }
};
