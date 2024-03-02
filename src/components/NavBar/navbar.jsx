import Links from "./links/links"
import styles from "./navbar.module.css"
import Link from "next/link"

const NavBar =() => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Tony's Portfolio</Link>
            <div>
                <Links />
            </div>    
        </div>
    )
}

export default NavBar;