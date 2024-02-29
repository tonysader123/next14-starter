import Links from "./links/links"
import styles from "./navbar.module.css"

const NavBar =() => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Tony's Blog</div>
            <div>
                <Links />
            </div>    
        </div>
    )
}

export default NavBar;