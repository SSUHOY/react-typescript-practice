import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState("");
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(data);
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPosts();
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="header-box">
        <h1 className="header-box__title">Главная страница</h1>
      </header>
    </div>
  );
};

export default Main;
