import axios from "axios";

// export const CLIENT_URL= 'https://swapi.dev/api/starships/?page=1'
export const CLIENT_URL = "https://swapi.dev/api/starships/?page=1";

export const fetchData = async () => {
  try {
    const response = await axios.get(CLIENT_URL);
    const data = response.data.results;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
