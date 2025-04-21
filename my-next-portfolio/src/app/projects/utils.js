import projects from "@/data/projects.json";

export function getProjectsMap() {
    const entries = Object.entries(projects);
    return new Map(entries);
}

export function getProjectById(id) {
    const projectsMap = getProjectsMap();
    return projectsMap.has(id) ? projectsMap.get(id) : null;
}

export function iterProjects(handler) {
    return Object.entries(projects).map(([ project, data ]) => handler(project, data));
}

export async function generateProjectParams() {
    return Array.from(
        Object.keys(projects)).map((project) => ({ project })
    );
}