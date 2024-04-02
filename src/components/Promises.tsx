import { Box, Button, List, Text, Title } from "@mantine/core";
import React, { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Promises: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <Box m={"10px"} style={{ textAlign: "center" }}>
      <Title mt={"20px"} fs={"24px"}>
        Posts
      </Title>
      <Button mt={"20px"} onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </Button>
      {error && (
        <Text mt={"40px"} c="red">
          Error: {error}
        </Text>
      )}
      <Box p={0} mt={"20px"}>
        {posts.map((post) => (
          <List key={post.id} mb={"20px"}>
            <Text fw={700} size="20px">
              {post.title}
            </Text>
            <Text size="16px" mt={"30px"}>
              {post.body}
            </Text>
          </List>
        ))}
      </Box>
    </Box>
  );
};

export default Promises;
