import React from "react";

export interface IHeaderProps {
  query: string;
  setSearchModal: (searchModal: (prevState: boolean) => boolean) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
