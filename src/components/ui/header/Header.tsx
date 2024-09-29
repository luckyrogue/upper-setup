import * as React from "react";
import { headerStyles } from "./styles.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { Input } from "../input/Input.tsx";
import { Profile } from "../../layout/profile/Profile.tsx";
import { useGetPosts } from "../../../services/useGetPosts/useGetPosts.ts";
import { useState } from "react";
import { queryHandler } from "../../../utils/queryHandler/queryHandler.ts";

export const Header: React.FC = () => {

  const { loading, fetchPosts } = useGetPosts();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    queryHandler(searchQuery, 1)
    fetchPosts(searchQuery, 1).then(r => r)
  };


  return (
    <header style={headerStyles.header}>
      <img style={headerStyles.logo} src={assetsConstant.LOGO} alt="" />
      <Input
        loading={loading}
        placeholder={"Batman"}
        maxWidth={"280px"}
        handleInputChange={handleInputChange}
      />
      <Profile username={"Your Name"} />
    </header>
  );
};
