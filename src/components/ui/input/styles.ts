import { TInputStyles } from "./types.ts";

export const inputStyles: TInputStyles = (props) => ({
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #E6EAF5",
    borderRadius: "5px",
    position: "relative",
    width: "100%",
    height: "100%",
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
  },
  input: {
    flexGrow: 1,
    border: "none",
    outline: "none",
    padding: "0 10px",
    fontSize: "16px",
  },
  iconContainer: {
    position: "absolute",
    right: "10px",
    display: "flex",
    alignItems: "center",
  },
});
