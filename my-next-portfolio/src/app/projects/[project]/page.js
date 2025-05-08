import Link from "next/link";
import projectInfo from "./project-info";

import { getProjectById, generateProjectParams } from "../utils";

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

  return (
    <div>
      <h1 className="text-3xl font-bold underline">My Project: {id}</h1>
      <p style={{ backgroundColor: projectData.theme }}>Name: {projectData.name}</p>
      <p>Description: {projectData.info}</p>
      {(projectData.href ? <Link href={projectData.href}>Webpage Link</Link> : <code>Nothing here</code>)}
      {(projectData.repo ? <Link href={projectData.repo}>Github Repo</Link> : <code>Nothing here</code>)}
      <ul>
        {projectData.tech.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>

      <h1>Content</h1>
      <ProjectInfo></ProjectInfo>
    </div>
  );
}