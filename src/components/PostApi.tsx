import { TextInput } from "@mantine/core";
import React from "react";

const PostApi: React.FC = () => {
  
  return (
    <div>
      <>
        <TextInput
          leftSectionPointerEvents="none"
          // leftSection={icon}
          label="Your email"
          placeholder="Your email"
        />
        <TextInput
          mt="md"
          rightSectionPointerEvents="none"
          // rightSection={icon}
          label="Your email"
          placeholder="Your email"
        />
      </>
    </div>
  );
};

export default PostApi;
