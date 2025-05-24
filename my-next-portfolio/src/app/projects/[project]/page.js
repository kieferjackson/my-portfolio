import Link from "next/link";
import ProjectNavButton from "./project-nav-btn";
import projectInfo from "./project-info";
import styles from "./page.module.css";

import { getProjectById, getProjectNumberAndTotal, getProjectNeighbors, generateProjectParams } from "../utils";

export const dynamicParams = false;
export const generateStaticParams = generateProjectParams;

export async function generateMetadata({ params }) {
  const { project: id } = await params;
  const projectData = getProjectById(id);
  
  return {
    title: {
      absolute: projectData.name
    },
    description: projectData.info
  };
}

export default async function Page({ params }) {
  const { project: id } = await params;

  const projectData = getProjectById(id);
  const ProjectInfo = projectInfo[id];

  const [ prevProject, nextProject ] = getProjectNeighbors(id);
  const [ projectNumber, totalProjects ] = getProjectNumberAndTotal(id).map(num => String(num).padStart(2, '0'));

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.paginationContainer} aria-label="pagination">
          <ProjectNavButton projectId={prevProject} previous={true}>Previous</ProjectNavButton>
          <span className={styles.projectNavPagination}>{projectNumber}<span className={styles.slash}>&#47;</span>{totalProjects}</span>
          <ProjectNavButton projectId={nextProject}>Next</ProjectNavButton>
        </nav>

        <h1 id={styles.project}>{projectData.name}</h1>
      </header>
      <ProjectInfo></ProjectInfo>
      <aside className={styles.projectAside}>
        <p style={{ backgroundColor: projectData.theme }}>Description: {projectData.info}</p>
        {(projectData.href ? <Link href={projectData.href}>Webpage Link</Link> : <code>Nothing here</code>)}
        {(projectData.repo ? <Link href={projectData.repo}>Github Repo</Link> : <code>Nothing here</code>)}
        <ul>
          {projectData.tech.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </aside>
    </main>
  );
}