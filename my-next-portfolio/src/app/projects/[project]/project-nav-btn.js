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

    const rotateDeg = previous ? 270 : 90;
    const triAltText = `${previous ? "Left" : "Right"}-facing triangle.`;

    return (
        <button {...attr} onClick={() => router.push('/projects/' + projectId)}>
            {children}
            <img src="/svg/triangle.svg" width={10} height={10} style={{ transform: `rotate(${rotateDeg}deg)` }} alt={triAltText}/>
        </button>
    );
}