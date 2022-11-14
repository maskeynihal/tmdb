import api from "../config/api";
import http from "../lib/http";

/**
 * Search by keywords.
 *
 * @param {string} keyword
 * @param {Record<string, unknown>} params
 * @returns
 */
export const searchKeywords = async (keyword, params = {}) => {
  const response = await http.get(api.endpoints.search.keyword, {
    params: { ...params, query: keyword },
  });

  return response.data.results;
};
