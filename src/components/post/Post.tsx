import * as React from "react";
import { postStyles } from "./styles.ts";
import { IPostProps } from "./types.ts";
import { NoImage } from "./NoImage/NoImage.tsx";
import { CSSProperties } from "react";

export const Post: React.FC<IPostProps> = ({
  img,
  title,
  year,
  imdbId,
  type,
}) => {
  return (
    <div style={postStyles.container}>
      {img !== null ? (
        <img style={postStyles.image} src={img} alt={`${title}-img`} />
      ) : (
        <NoImage />
      )}
      <div style={postStyles.infoBlock as CSSProperties}>
        <span>Name: {title}</span>
        <span>Year: {year}</span>
        <span>imdbID: {imdbId}</span>
        <span>Type: {type}</span>
      </div>
    </div>
  );
};
