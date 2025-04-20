export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = ["next"];
 
  return projects.map((project) => ({ project }))
}

export default async function Page({ params }) {
  const { project } = await params;
  return <div>My Project: {project}</div>
}