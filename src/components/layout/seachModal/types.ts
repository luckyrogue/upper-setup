import React from "react";

export interface ISearchModal {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
