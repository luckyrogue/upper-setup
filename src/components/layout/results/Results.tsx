import React, { CSSProperties, } from "react";
import { resultsStyles } from "./styles.ts";
import { IResultsProps } from "./types.ts";

export const Results: React.FC<IResultsProps> = ({ query, postsLength }) => {
  return (
    <div style={resultsStyles.resultsContainer}>
      You searched for:
      <span style={resultsStyles.searchQuery}>{query}</span>
      <div style={resultsStyles.resultsBlock as CSSProperties}>
        {postsLength ?? 0} results
      </div>
    </div>
  );
};
