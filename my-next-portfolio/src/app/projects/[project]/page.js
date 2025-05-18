import Link from "next/link";
import ProjectNavButton from "./project-nav-btn";
import projectInfo from "./project-info";

import { getProjectById, getProjectNeighbors, generateProjectParams } from "../utils";

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

  return (
    <div>
      <ProjectNavButton projectId={prevProject}>Previous</ProjectNavButton>
      <ProjectNavButton projectId={nextProject}>Next</ProjectNavButton>

      <p style={{ backgroundColor: projectData.theme }}>Description: {projectData.info}</p>
      {(projectData.href ? <Link href={projectData.href}>Webpage Link</Link> : <code>Nothing here</code>)}
      {(projectData.repo ? <Link href={projectData.repo}>Github Repo</Link> : <code>Nothing here</code>)}
      <ul>
        {projectData.tech.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>

      <hgroup>
        <h1>{projectData.name}</h1>
        <ProjectInfo></ProjectInfo>
      </hgroup>
    </div>
  );
}