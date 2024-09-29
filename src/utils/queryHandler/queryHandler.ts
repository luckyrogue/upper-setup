import { TQueryHandler } from "./types.ts";

export const queryHandler: TQueryHandler = (searchQuery, page = 1) => {
  const url = new URL(window.location.href);
  if (!searchQuery) {
    url.searchParams.delete("search");
  } else {
    url.searchParams.set("search", searchQuery);
  }
  url.searchParams.set("page", page.toString());
  window.history.pushState({}, "", url);
};
