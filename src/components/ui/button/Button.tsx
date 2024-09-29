import React from "react";
import { IButtons } from "./types.ts";
import { buttonStyles } from "./styles.ts";

export const Button: React.FC<IButtons> = ({ label, icon, clickHandler }) => {
  const index = 0;

  return (
    <button style={buttonStyles.button} onClick={clickHandler}>
      {label && <span>{label}</span>}
      {icon && (
        <img
          style={buttonStyles.icons}
          src={icon}
          alt={label ? `${label} icon` : `button icon+${index}`}
        />
      )}
    </button>
  );
};
