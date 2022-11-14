import { createRef, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import endpoints from "../../../../routes/endpoints";

const Hero = (props) => {
  const navigate = useNavigate();

  const handleSearchClick = (searchInput) => {
    console.log(searchInput);
    if (!searchInput) {
      return;
    }

    navigate({
      pathname: endpoints.search,
      search: `?q=${searchInput}`,
    });
  };

  return (
    <div className="hero">
      <div className="hero__content container">
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>

      <SearchBar onSearchClick={handleSearchClick} />
    </div>
  );
};

export default Hero;
