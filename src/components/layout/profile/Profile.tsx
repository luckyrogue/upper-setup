import * as React from "react";
import { IProfileProps } from "./types.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { profileStyles } from "./styles.ts";

export const Profile: React.FC<IProfileProps> = ({ username }) => {
  return (
    <div style={profileStyles.profileBox}>
      <img
        style={profileStyles.profileIcon}
        src={assetsConstant.ACCOUNT_SVG}
        alt="Account Profile"
      />
      <span style={profileStyles.profileText}>{username ?? "Your Name"}</span>
    </div>
  );
};
