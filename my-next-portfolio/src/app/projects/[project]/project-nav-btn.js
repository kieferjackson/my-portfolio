"use client";

import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function ProjectNavButton({ children, projectId, previous = false }) {
    const router = useRouter();

    const attr = {
        className: styles.projectNavBtn,
        disabled: projectId == null
    }

    if (attr.disabled) {
        attr.className += ` ${styles.disabled}`;
    }

    const direction = previous ? styles.left : styles.right;
    attr.className += " " + direction;

    attr["aria-label"] = `Navigate to ${previous ? 'previous' : 'next'} project.`;

    return (
        <button {...attr} onClick={() => router.push('/projects/' + projectId)}>
            {children}
        </button>
    );
}