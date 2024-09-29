import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { TPost, TGetPostsResponse, TPagination, TUseGetPosts } from "./types";
import { queryHandler } from "../../utils/queryHandler/queryHandler.ts";

const apiKey = import.meta.env.VITE_API_KEY;
const i = import.meta.env.VITE_API_I;

export const useGetPosts = (): TUseGetPosts => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [pagination, setPagination] = useState<TPagination | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(
    async (searchQuery?: string, page: number = 1) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get<TGetPostsResponse>("", {
          params: {
            i,
            apiKey,
            s: searchQuery,
            page,
          },
        });

        if (response.data.Response === "True") {
          const totalItems = Number(response.data.totalResults);
          const perPage = 8;
          const totalPages = Math.ceil(totalItems / perPage);

          setPosts(response.data.Search);
          setPagination({
            totalPages,
            currentPage: page,
            totalItems,
          });
          queryHandler(searchQuery, page);
        } else {
          setPosts([]);
          setError("No movies found");
        }
      } catch (error) {
        setError("Failed to fetch posts");
        throw new Error(String(error));
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search") || "";
    const page = parseInt(urlParams.get("page") || "1", 10);

    fetchPosts(searchQuery, page).then((r) => r);
  }, [fetchPosts]);

  return {
    posts,
    pagination,
    loading,
    error,
    fetchPosts,
  };
};
