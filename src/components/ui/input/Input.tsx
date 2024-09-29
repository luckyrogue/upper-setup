import * as React from "react";
import type { IInputProps } from "./types.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { LoaderSvg } from "../../../assets/svg/loader/LoaderSvg.tsx";
import { inputStyles } from "./styles.ts";

export const Input: React.FC<IInputProps> = ({
  type = "text",
  loading = false,
  placeholder,
  handleInputChange,
  minWidth = "280px",
  maxWidth = "100%",
  minHeight = "40px",
  maxHeight = "100%",
}) => {
  const styles = inputStyles({ minWidth, maxWidth, minHeight, maxHeight });

  return (
    <div style={styles.inputWrapper}>
      <input
        style={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <div style={styles.iconContainer}>
        {loading ? (
          <LoaderSvg />
        ) : (
          <img src={assetsConstant.SEARCH_SVG} alt="" />
        )}
      </div>
    </div>
  );
};
