import React from "react";

const Todo = ({ todo }) => {
  const { text, status } = todo;
  return (
    <li>
      <label htmlFor="checkbox">{text}</label>
    </li>
  );
};

export default Todo;
