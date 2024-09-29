export type TPost = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

export type TPagination = {
  totalPages: number;
  currentPage: number;
  totalItems: number;
};

export type TGetPostsResponse = {
  Search: TPost[];
  totalResults: string;
  Response: string;
};

export type TUseGetPosts = {
  posts: TPost[];
  pagination: TPagination | null;
  loading: boolean;
  error: string | null;
  fetchPosts: (searchQuery: string, page?: number) => Promise<void>;
};
