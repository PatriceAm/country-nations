import axios from "axios";

const baseURL = "https://restcountries.com/v2/all";

const getAll = async () => {
  const resp = await axios.get(baseURL);
  return resp.data;
};

export default {getAll};
