import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../components/PostItem";
import { PostsData } from "../../types";
import {
  Container,
  Header,
  HeaderTitle,
  PostsItems,
} from "../../styles/MainPage/Main.styles";

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
    <Container>
      <Header>
        <HeaderTitle>Ваши публикации</HeaderTitle>
      </Header>
      <section className="posts">
        <PostsItems>
          {posts?.map((post, index) => (
            <Item key={index} title={post.title} body={post.body} />
          ))}
        </PostsItems>
        <div className="error-box">
          <p className="error">{error}</p>
        </div>
      </section>
    </Container>
  );
};

export default Main;
