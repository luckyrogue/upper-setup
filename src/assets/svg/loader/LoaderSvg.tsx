import * as React from "react";
import { loaderIconStyles } from "./styles.ts";

export const LoaderSvg: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={loaderIconStyles.loader}
      viewBox="0 0 50 50"
    >
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  );
};
