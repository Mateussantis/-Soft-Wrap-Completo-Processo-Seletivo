import Axios from 'axios';

export const api = Axios.create
  ({
    baseURL: "http://localhost:3333/",
    headers: {
      "Content-Type": "application/json",
    }
  });
