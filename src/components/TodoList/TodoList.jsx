import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(ListItem);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;

const ListItem = [
  {
    id: 1,
    text: "잠자기",
    status: "active",
  },
  {
    id: 2,
    text: "공부하기",
    status: "active",
  },
];
