import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
