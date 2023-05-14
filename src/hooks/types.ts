import { MutableRefObject } from "react";

export interface CustomHookReturn {
  parallaxed: {
    transform: string;
  };
  jumbotronElementRef: MutableRefObject<HTMLDivElement | null>
};
