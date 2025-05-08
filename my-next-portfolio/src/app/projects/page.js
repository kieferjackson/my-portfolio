import Link from "next/link";

import styles from "./page.module.css";
import { iterProjects } from "./utils";

export const metadata = {
  title: 'Projects',
  description: 'Notable projects developed by Kiefer Jackson.'
};

export default function Projects() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
        {iterProjects((project, data) => (
          <li key={project}>
            <Link href={`/projects/${project}`}>{data.name}</Link>
          </li>
        ))}
        </ul>
      </main>
    </div>
  );
}