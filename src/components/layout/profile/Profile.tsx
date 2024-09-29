import * as React from "react";
import { IProfileProps } from "./types.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { profileStyles } from "./styles.ts";
import { useIsMobile } from "../../../utils/useIsMobile/useIsMobile.ts";

export const Profile: React.FC<IProfileProps> = ({ username }) => {
  const isMobile = useIsMobile();
  return (
    <div style={profileStyles.profileBox}>
      <img
        style={profileStyles.profileIcon}
        src={assetsConstant.ACCOUNT_SVG}
        alt="Account Profile"
      />
      {!isMobile && (
        <span style={profileStyles.profileText}>{username ?? "Your Name"}</span>
      )}
    </div>
  );
};
