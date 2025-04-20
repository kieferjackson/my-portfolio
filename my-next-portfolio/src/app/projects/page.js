import Link from "next/link";

import styles from "./page.module.css";
import projects from "@/app/data/projects.json";

export default function Projects() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
        {Array.from(Object.keys(projects)).map((project) => (
          <li key={project}>
            <Link href={`/projects/${project}`}>{projects[project].name}</Link>
          </li>
        ))}
        </ul>
      </main>
    </div>
  );
}