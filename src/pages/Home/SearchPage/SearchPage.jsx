import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../../../components/SearchBar/SearchBar";
import endpoints from "../../../routes/endpoints";

const SearchPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSearchValue = searchParams.get("q") || "";

  const navigate = useNavigate();

  const handleSearchClick = (searchInput) => {
    if (!searchInput) {
      return;
    }

    navigate({ pathname: endpoints.search, search: `?q=${searchInput}` });
  };

  return (
    <>
      <div className="search__container">
        <SearchBar
          onSearchClick={handleSearchClick}
          defaultSearchValue={defaultSearchValue}
        />
      </div>
    </>
  );
};

export default SearchPage;
