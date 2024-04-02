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
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Posts</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>Error: {error}</p>
      )}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>
              {post.title}
            </h2>
            <p style={{ fontSize: "16px" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Promises;
