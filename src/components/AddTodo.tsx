import React, { useState } from "react";

const AddTodo: React.FC = () => {
  const [AddTodo, setAddTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onAdd = () => {
    setTodos([...todos, AddTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, itemIndex) => itemIndex !== index)
    );
  };
  return <div>AddTodo</div>;
};

export default AddTodo;
