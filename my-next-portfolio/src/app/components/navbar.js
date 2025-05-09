"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

import styles from "./navbar.module.css";

export default function NavBar() {
    const menuItemMap = new Map([
        ["about", "About Me"],
        ["projects", "Projects"]
    ]);

    const pathname = usePathname();
    const [ basepath ] = pathname.slice(1).split('/');

    return (
        <nav className={styles.navbar} role="navigation">
            <a href="/">
                <img src="/svg/kj-logo.svg" width={48} height={48} alt="KJ Logo" />
            </a>
            
            {([ ...menuItemMap.entries() ]).map(([ route, title ], index) => {
                const attrs = {};

                if (route == basepath) {
                    attrs["aria-current"] = "page";
                    attrs["style"] = { boxShadow: "0 -2px 0 var(--amp-yellow) inset" };
                }

                return <Link key={index} href={`/${route}`} { ...attrs } className={styles["navbar-link"]}>{title}</Link>
            })}
        </nav>
    );
  }

