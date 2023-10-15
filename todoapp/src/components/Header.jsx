import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      {" "}
      <h3 className={styles.header}>My ToDo List</h3>
    </div>
  );
}
