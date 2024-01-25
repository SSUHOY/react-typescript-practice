import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../../components/PostItem";
import { PostsData } from "../../types";

const Main = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(data);
    } catch (error) {
      let errorMessage = "Failed to do GET request";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
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
      <section className="posts">
        <div className="posts-box">
          <h1 className="posts-box__title">
            <div className="posts-box__items">
              {posts?.map((post, index) => (
                <Item key={index} title={post.title} body={post.body} />
              ))}
            </div>
          </h1>
        </div>
        <div className="error-box">
          <p className="error">{error}</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
