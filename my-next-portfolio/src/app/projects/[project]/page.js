import Link from "next/link";

import { getProjectById, generateProjectParams } from "../utils";

export const dynamicParams = false;

export const generateStaticParams = generateProjectParams;

export default async function Page({ params }) {
  const { project } = await params;

  const projectData = getProjectById(project);

  return (
    <div>
      <h1>My Project: {project}</h1>
      <p>Name: {projectData.name}</p>
      {(projectData.href ? <Link href={projectData.href}>Webpage Link</Link> : <code>Nothing here</code>)}
      {(projectData.repo ? <Link href={projectData.repo}>Github Repo</Link> : <code>Nothing here</code>)}
      <ul>
        {projectData.tech.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
    </div>
  )
}