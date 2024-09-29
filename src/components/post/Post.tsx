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
      {img !== "N/A" ? (
        <img style={postStyles.image} src={String(img)} alt={`${title}-img`} />
      ) : (
        <NoImage />
      )}
      <div style={postStyles.infoBlock as CSSProperties}>
        <span>Name: {title ?? 'No info'}</span>
        <span>Year: {year ?? 'No info'}</span>
        <span>imdbID: {imdbId ?? 'No info'}</span>
        <span>Type: {type ?? 'No info'}</span>
      </div>
    </div>
  );
};
