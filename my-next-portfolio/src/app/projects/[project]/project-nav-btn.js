"use client";

import { useRouter } from "next/navigation";

export default function ProjectNavButton({ children, projectId }) {
    const router = useRouter();

    return (
        <button onClick={() => router.push('/projects/' + projectId)} disabled={projectId == null}>
            {children}
        </button>
    );
}