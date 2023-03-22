import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (text.trim().length === 0) {
      return;
    }
=======
    if (text.trim().length === 0) return;
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
