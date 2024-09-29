import React, { CSSProperties } from "react";
import { globalStyles, loaderStyles } from "./styles.ts";

export const Loader: React.FC = () => {
  return (
    <div style={loaderStyles.loaderOverlay as CSSProperties}>
      <div style={loaderStyles.loaderContainer as CSSProperties}>
        <div style={loaderStyles.spinner}></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

