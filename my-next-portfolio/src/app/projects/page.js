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
        <div className={styles.projectsContainer}>
        {iterProjects((project, data) => (
          <section key={project} className={styles.projectItem}>
              <div className={styles.projectInfo}>
                <Link href={`/projects/${project}`}>{data.name}</Link>
                <p>{data.info}</p>
              </div>
          </section>
        ))}
        </div>
      </main>
    </div>
  );
}