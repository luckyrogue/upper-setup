import * as React from "react";
import { headerStyles } from "./styles.ts";
import { assetsConstant } from "../../../assets/assetsConstant.ts";
import { Input } from "../input/Input.tsx";
import { Profile } from "../../layout/profile/Profile.tsx";
import { CSSProperties } from "react";
import { IHeaderProps } from "./types.ts";
import { useIsMobile } from "../../../utils/useIsMobile/useIsMobile.ts";
import { Button } from "../button/Button.tsx";

export const Header: React.FC<IHeaderProps> = ({
  query,
  setSearchModal,
  handleInputChange,
}) => {
  const isMobile = useIsMobile();

  return (
    <header style={headerStyles.header as CSSProperties}>
      <img style={headerStyles.logo} src={assetsConstant.LOGO} alt="" />
      {!isMobile ? (
        <>
          <Input
            placeholder={query}
            maxWidth={"280px"}
            handleInputChange={handleInputChange}
          />
          <Profile username={"Your Name"} />
        </>
      ) : (
        <div style={headerStyles.rightContainer}>
          <Button
            icon={assetsConstant.SEARCH_SVG}
            clickHandler={() =>
              setSearchModal((prevState: boolean) => !prevState)
            }
          />
          <Profile username={"Your Name"} />
        </div>
      )}
    </header>
  );
};
