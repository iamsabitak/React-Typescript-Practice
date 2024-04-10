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
  return (
    <div>
      <input
        type="text"
        placeholder="enter the name"
        value={AddTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
