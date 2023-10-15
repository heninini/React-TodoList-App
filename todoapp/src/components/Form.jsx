import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.modernInput}
              type="text"
              value={todo.name}
              onChange={(e) => setTodo({ name: e.target.value, done: false })}
              placeholder="Enter todo item.."
            />
            <button className={styles.modernButton} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
