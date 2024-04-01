import { Button, TextInput } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";

const PostApi: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();

  const postData = async () => {
    const datas = { email: email, name: name };
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      datas,
    });
    console.log(res);
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <TextInput
        label="Full Name"
        placeholder="Full Name"
        name="name"
        value={name}
        onChange={nameChangeHandler}
      />
      <TextInput
        mt="md"
        label="Your email"
        name="email"
        placeholder="Your email"
        value={email}
        onChange={emailChangeHandler}
      />
      <Button onClick={postData}>Submit</Button>
    </div>
  );
};

export default PostApi;
