import axios from "axios";

const URL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default URL;
