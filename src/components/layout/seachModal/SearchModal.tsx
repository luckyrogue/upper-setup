import React from "react";
import { Input } from "../../ui/input/Input.tsx";
import { ISearchModal } from "./types.ts";
import { searchModalStyles } from "./styles.ts";

export const SearchModal: React.FC<ISearchModal> = ({
  query,
  handleInputChange,
}) => {
  return (
    <div style={searchModalStyles.modal}>
      <Input
        placeholder={query}
        maxWidth={"90%"}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
