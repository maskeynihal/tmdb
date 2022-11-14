import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { asyncState } from "../../../constants/common";
import {
  fetchSearchKeywords,
  getSearchResults,
  getSearchResultsStatus,
} from "../../../features/search/searchSlice";
import formatDate from "../../../lib/date";
import endpoints from "../../../routes/endpoints";
import { getImageUrl } from "../../../services/tmdb";

const searchList = ["movie", "tv"];

const SearchPage = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const keyword = searchParams.get("q") || "";
  const searchResults = useSelector(getSearchResults);
  const status = useSelector(getSearchResultsStatus);

  const count = useMemo(() => {
    return searchResults?.reduce(
      (acc, cv) => {
        console.log({ acc, cv: cv.media_type });
        if (cv.media_type === "movie") {
          acc.movie += 1;
        }

        if (cv.media_type === "tv") {
          acc.tv += 1;
        }

        return acc;
      },
      {
        movie: 0,
        tv: 0,
      }
    );
  }, [searchResults]);

  const handleSearchClick = (searchInput) => {
    if (!searchInput) {
      return;
    }

    navigate({ pathname: endpoints.search, search: `?q=${searchInput}` });
  };

  useEffect(() => {
    if (status === asyncState.pending) {
      return;
    }

    dispatch(fetchSearchKeywords(keyword));
  }, [keyword]);

  return (
    <>
      <div className="container search__page-container">
        <SearchBar
          onSearchClick={handleSearchClick}
          defaultSearchValue={keyword}
        />

        {status === asyncState.pending ? (
          <div className="loading--horizontal">
            <Loading />
          </div>
        ) : (
          <div className="search__result">
            <div className="search-summary__card">
              <div className="search-summary__title">Search Results</div>
              <div className="search-summary__content">
                {searchList.map((searchType) => {
                  const searchResultCount = count[searchType] || 0;

                  return (
                    <div className="search-summary__list" key={searchType}>
                      <div className="search-summary__content-title">
                        {searchType}
                      </div>
                      <div className="search-summary__content-count">
                        {searchResultCount}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <ul className="search__container flex">
              {searchResults
                .filter(
                  ({ release_date, first_air_date, title }) =>
                    !release_date || !first_air_date || !title
                )
                .map((result) => {
                  return (
                    <li key={result.id}>
                      <div className="search__card">
                        <div className="search__poster">
                          <img
                            src={getImageUrl(result.poster_path)}
                            alt={result.title}
                          />
                        </div>
                        <div className="search__content">
                          <div className="search__title">
                            <h3>{result.title}</h3>
                            <h5>
                              {formatDate(
                                result.release_date ||
                                  result.first_air_date ||
                                  null
                              )}
                            </h5>
                          </div>
                          <div className="search__overview">
                            <p>{result.overview}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
