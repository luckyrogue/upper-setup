import React from "react";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { noImageStyles } from "./styles.ts";

export const NoImage: React.FC = () => {
  return (
    <div style={noImageStyles.box}>
      <img
        style={noImageStyles.imageIcon}
        src={assetsConstant.IMAGE_ICON}
        alt="no-image"
      />
    </div>
  );
};
