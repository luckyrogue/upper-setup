import React from "react";
import { noResultsStyles } from "./styles.ts";

export const NoResults: React.FC = () => {
  return (
    <div style={noResultsStyles.wrapper}>
      <span style={noResultsStyles.textBlock}>No Results</span>
    </div>
  );
};
