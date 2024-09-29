import * as React from "react";
import { headerStyles } from "./styles.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { Input } from "../input/Input.tsx";
import { Profile } from "../../layout/profile/Profile.tsx";
import { CSSProperties, useMemo } from "react";
import { debounce } from "../../../utils/debounce/debounce.ts";
import { IHeaderProps } from "./types.ts";

export const Header: React.FC<IHeaderProps> = ({ query, fetchPosts }) => {
  const debouncedFetchPosts = useMemo(
    () =>
      debounce((query: string) => {
        const searchQuery = query.trim() === "" ? "Batman" : query;
        fetchPosts(searchQuery, 1).then((r) => r);
      }, 1000),
    [fetchPosts],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedFetchPosts(value);
  };

  return (
    <header style={headerStyles.header as CSSProperties}>
      <img style={headerStyles.logo} src={assetsConstant.LOGO} alt="" />
      <Input
        placeholder={query}
        maxWidth={"280px"}
        handleInputChange={handleInputChange}
      />
      <Profile username={"Your Name"} />
    </header>
  );
};
