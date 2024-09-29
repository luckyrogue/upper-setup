import React, { CSSProperties } from "react";

export interface IInputProps extends IInputStylesProps {
  type?: string;
  loading?: boolean;
  placeholder?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputStylesProps {
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
}

export interface IInputStylesPropsResults {
  inputWrapper: CSSProperties;
  input: CSSProperties;
  iconContainer: CSSProperties;
}

export type TInputStyles = (
  props: IInputStylesProps,
) => IInputStylesPropsResults;
