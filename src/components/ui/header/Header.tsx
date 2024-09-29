import * as React from "react";
import { headerStyles } from "./styles.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { Input } from "../input/Input.tsx";
import { Profile } from "../../layout/profile/Profile.tsx";

export const Header: React.FC = () => {
  return (
    <header style={headerStyles.header}>
      <img style={headerStyles.logo} src={assetsConstant.LOGO} alt="" />
      <Input
        placeholder={"Batman"}
        maxWidth={"280px"}
        handleInputChange={() => {}}
      />
      <Profile username={"Your Name"} />
    </header>
  );
};
