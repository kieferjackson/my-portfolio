import Link from "next/link";
import ProjectNavButton from "./project-nav-btn";
import { IconLink, IconTypes } from "@/app/components/icon-link";
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

  const projectLinks = [];
  const linkAttr = { sideLength: 35 };

  if (projectData.href) {
    projectLinks.push(<IconLink url={projectData.href} type={IconTypes.Website} key={IconTypes.Website} { ...linkAttr }></IconLink>)
  }
  if (projectData.repo) {
    projectLinks.push(<IconLink url={projectData.repo} type={IconTypes.Github} key={IconTypes.Github} { ...linkAttr }></IconLink>)
  }

  return (
    <main className={styles.main}>
      <div>
        <header className={styles.header}>
          <nav className={styles.paginationContainer} aria-label="pagination">
            <ProjectNavButton projectId={prevProject} previous={true}>Previous</ProjectNavButton>
            <span className={styles.projectNavPagination}>{projectNumber}<span className={styles.slash}>&#47;</span>{totalProjects}</span>
            <ProjectNavButton projectId={nextProject}>Next</ProjectNavButton>
          </nav>

          <h1 id={styles.project}>{projectData.name}</h1>
        </header>
        <ProjectInfo></ProjectInfo>
      </div>
      
      <aside className={styles.projectAside}>
        {projectLinks}
        <ul>
          {projectData.tech.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </aside>
    </main>
  );
}