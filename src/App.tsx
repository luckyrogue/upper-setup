import { useGetPosts } from "./services/useGetPosts/useGetPosts.ts";
import { Pagination } from "./components/ui/pagination/Pagination.tsx";
import { Header } from "./components/ui/header/Header.tsx";
import { Post } from "./components/post/Post.tsx";
import { Results } from "./components/layout/results/Results.tsx";
import { NoResults } from "./components/layout/noResults/NoResults.tsx";
import { Loader } from "./components/layout/loader/Loader.tsx";

function App() {
  const { loading, pagination, posts, query, fetchPosts } = useGetPosts();

  const handlePageChange = (page: number) => {
    const searchQuery = "";
    fetchPosts(searchQuery, page).then((r) => r);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="app">
        <Header fetchPosts={fetchPosts} query={String(query)} />
        <div className="content">
          <Results query={String(query)} postsLength={posts?.length }  />
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
