type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
const Promises: React.FC = () => {
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
  return <div>Promises</div>;
};

export default Promises;
