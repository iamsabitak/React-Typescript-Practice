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
    console.log(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(false);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(false);
      });
  };
  fetchData();
  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading && "Loading..."}
        {!loading && "Fetch Data"}
      </button>
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Promises;
