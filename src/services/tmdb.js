import api from "../config/api";

export const getImageUrl = (filename) => {
  return `${api.image}${filename}`;
};
