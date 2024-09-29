import { useGetPosts } from "./services/useGetPosts/useGetPosts.ts";
import { Pagination } from "./components/ui/pagination/Pagination.tsx";
import { Header } from "./components/ui/header/Header.tsx";
import { Post } from "./components/post/Post.tsx";
import { Results } from "./components/layout/results/Results.tsx";
import { NoResults } from "./components/layout/noResults/NoResults.tsx";
import { Loader } from "./components/layout/loader/Loader.tsx";
import { useMemo, useState } from "react";
import { SearchModal } from "./components/layout/seachModal/SearchModal.tsx";
import { debounce } from "./utils/debounce/debounce.ts";
import * as React from "react";

function App() {
  const { loading, pagination, posts, query, fetchPosts } = useGetPosts();
  const [searchModal, setSearchModal] = useState(false);

  const handlePageChange = (page: number) => {
    fetchPosts(query || "Batman", page).then((r) => r);
  };

  const debouncedFetchPosts = useMemo(
    () =>
      debounce((query: string) => {
        const searchQuery = query.trim() === "" ? "Batman" : query;
        fetchPosts(searchQuery, 1).then((r) => r);
      }, 1000),
    [fetchPosts],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    debouncedFetchPosts(value);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="app">
        <Header
          setSearchModal={setSearchModal}
          query={String(query)}
          handleInputChange={handleInputChange}
        />
        {searchModal && (
          <SearchModal
            query={String(query)}
            handleInputChange={handleInputChange}
          />
        )}
        <div className="content">
          <Results
            query={String(query)}
            postsLength={Number(pagination?.totalItems)}
          />
          <div className="posts__block">
            {posts?.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post.imdbID}
                  img={post.Poster}
                  title={post.Title}
                  year={post.Released}
                  imdbId={post.imdbID}
                  type={post.Type}
                />
              ))
            ) : (
              <NoResults />
            )}
          </div>
        </div>
        <Pagination
          currentPage={pagination?.currentPage || 1}
          totalPages={pagination?.totalPages || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
