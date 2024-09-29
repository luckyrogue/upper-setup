import React, { CSSProperties, useEffect, useState } from "react";
import { useGetPosts } from "../../../services/useGetPosts/useGetPosts.ts";
import { resultsStyles } from "./styles.ts";

export const Results: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const { posts } = useGetPosts();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    if (!search) setSearchQuery("");

    setSearchQuery(search);
  }, []);

  return (
    <div style={resultsStyles.resultsContainer}>
      You searched for:
      <span style={resultsStyles.searchQuery}>{searchQuery}</span>
      <div style={resultsStyles.resultsBlock as CSSProperties}>
        {posts?.length ?? 0} results
      </div>
    </div>
  );
};
