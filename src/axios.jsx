import axios from "axios";

const URL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    "Content-type": "application/json",
  },
});

export default URL;
