import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
