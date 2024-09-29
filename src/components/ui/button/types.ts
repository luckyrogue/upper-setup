import React from "react";

export interface IButtons {
  label?: string;
  icon?: string;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
