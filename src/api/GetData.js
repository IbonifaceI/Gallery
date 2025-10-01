import axios from "axios";

export const getData = async (limit = 10, page = 1) => {
  const respons = await axios.get("https://jsonplaceholder.typicode.com/photos/", {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  return respons.data;
};
