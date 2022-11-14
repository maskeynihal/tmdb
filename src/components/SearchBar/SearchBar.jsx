import { forwardRef, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = (props) => {
  const { onSearchClick, defaultSearchValue = "" } = props;

  const ref = useRef();

  const handleClick = (ref) => {
    const searchInput = (ref?.current?.value || "").trim();

    if (!searchInput) {
      return;
    }

    onSearchClick(searchInput);
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.value = defaultSearchValue;
  }, [ref, defaultSearchValue]);

  return (
    <div className="hero__search container">
      <input
        type="text"
        placeholder="Search for a movie, tv show, person...."
        ref={ref}
      />

      <button className="hero__search-button" onClick={() => handleClick(ref)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
