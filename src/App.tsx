import { useGetPosts } from "./services/useGetPosts/useGetPosts.ts";
import { Pagination } from "./components/ui/pagination/Pagination.tsx";
import { Header } from "./components/ui/header/Header.tsx";
import { Post } from "./components/post/Post.tsx";
import { Results } from "./components/layout/results/Results.tsx";
import { NoResults } from "./components/layout/noResults/NoResults.tsx";
import { Loader } from "./components/layout/loader/Loader.tsx";

function App() {
  const { loading, pagination, posts, fetchPosts } = useGetPosts();

  if (loading) return <Loader />

  const handlePageChange = (page: number) => {
    const searchQuery = ''
    fetchPosts(searchQuery, page).then(r => r);
  };

  return (
    <>
      <div className="app">
        <Header />
        <div>
          <Results />
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
        <Pagination currentPage={pagination?.currentPage || 1} totalPages={pagination?.totalPages || 1} onPageChange={handlePageChange} />
      </div>
    </>
  );
}

export default App;
