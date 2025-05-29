import Link from "next/link";
import Image from "next/image";

import styles from "./icon-link.module.css";

export const IconTypes = {
    Github: "github-logo",
    LinkedIn: "linkedin-logo",
    Website: "web-icon"
}

export function IconLink({ url, type, sideLength }) {

    let altText = '', className = styles.icon;
    switch (type)
    {
        case IconTypes.Github:
            altText = "Github logo";
            break;
        case IconTypes.LinkedIn:
            altText = "LinkedIn logo";
            break;
        case IconTypes.Website:
            altText = "Web icon";
            break;
    }

    return (
    <Link href={url}>
        <Image src={`/svg/${type}.svg`} width={sideLength} height={sideLength} alt={altText} className={className} />
    </Link>
    );
}