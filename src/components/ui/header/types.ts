export interface IHeaderProps {
  query: string
  fetchPosts: (searchQuery: string, page?: number) => Promise<void>;
}