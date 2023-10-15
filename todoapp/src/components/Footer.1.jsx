import styles from "./Footer.module.css";

export default function Footer({ completedTodo, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos:{completedTodo}</span>
      <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
  );
}
