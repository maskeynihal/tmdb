import api from "../config/api";
import http from "../lib/http";

/**
 * Fetch upcoming movies.
 *
 * @param {Record<string, unknown>} params
 * @returns {Promise<Array<Record<string, unknown>>>}
 */
export const fetchUpComingMovies = async (params) => {
  const movies = await http.get(api.endpoints.movies.upcoming, { params });

  return movies.data.results;
};
