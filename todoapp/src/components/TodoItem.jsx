import styles from "./TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete selected", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !item.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
