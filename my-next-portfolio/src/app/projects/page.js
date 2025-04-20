import styles from "./page.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
        </ul>
      </main>
    </div>
  );
}