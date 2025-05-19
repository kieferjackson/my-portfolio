import projects from "@/data/projects.json";

export function getProjectsMap() {
    const entries = Object.entries(projects);
    return new Map(entries);
}

export function getProjectById(id) {
    const projectsMap = getProjectsMap();
    return projectsMap.has(id) ? projectsMap.get(id) : null;
}

export function getProjectNumberAndTotal(id) {
    const projectKeys = Array.from(getProjectsMap().keys());
    const projectIndex = projectKeys.findIndex(projectId => projectId == id);

    return [projectIndex + 1, projectKeys.length];
}

export function getProjectNeighbors(id) {
    const projectsMap = getProjectsMap();

    let prevProject;
    const neighbors = new Array(2).fill(null);

    for (let projectId of projectsMap.keys()) {
        if (prevProject == id) {
            neighbors[1] = projectId;
            break;
        }
        else if (projectId != id) {
            neighbors[0] = projectId;
        }

        prevProject = projectId;
    }

    return neighbors;
}

export function iterProjects(handler) {
    return Object.entries(projects).map(([ project, data ]) => handler(project, data));
}

export async function generateProjectParams() {
    return Array.from(
        Object.keys(projects)).map((project) => ({ project })
    );
}