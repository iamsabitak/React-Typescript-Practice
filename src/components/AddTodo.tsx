import React, { useState } from "react";

const AddTodo: React.FC = () => {
    const [AddTodo, setAddTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  return <div>AddTodo</div>;
};

export default AddTodo;
