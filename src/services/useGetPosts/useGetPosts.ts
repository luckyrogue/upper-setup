import { useState, useCallback, useEffect } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { TPost, TGetPostsResponse, TPagination, TUseGetPosts } from "./types";

const apiKey = import.meta.env.VITE_API_KEY;
const i = import.meta.env.VITE_API_I;

export const useGetPosts = (): TUseGetPosts => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [pagination, setPagination] = useState<TPagination | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string | undefined>("Batman");
  const [page, setPage] = useState<number>(1);

  const fetchPosts = useCallback(
    async (searchQuery: string, page: number = 1) => {
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
        } else {
          setPosts([]);
          setError("No posts");
        }
      } catch (error) {
        setError("Failed to fetch posts");
        throw new Error(String(error));
      } finally {
        setLoading(false);
      }
    },
    []
  );


  useEffect(() => {
    if (query) {
      fetchPosts(query, page).then((r) => r);
    }
  }, [fetchPosts, query, page]);

  return {
    posts,
    pagination,
    loading,
    error,
    query,
    setQuery,
    fetchPosts,
    page,
    setPage,
  };
};
