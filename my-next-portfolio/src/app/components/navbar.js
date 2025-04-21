import Link from "next/link";

import styles from "./navbar.module.css";

export default function NavBar() {
    const menuItems = new Map([
        ["about", "About Me"],
        ["projects", "Projects"]
    ]);

    return (
      <nav className={styles.navbar}>
        {Array.from(menuItems.entries()).map(([ key, title ]) => {
            return <Link key={key} href={`/${key}`} className={styles.link}>{title}</Link>
        })}
      </nav>
    );
  }

