export interface IHeaderProps {
  fetchPosts: (searchQuery: string, page?: number) => Promise<void>;
}