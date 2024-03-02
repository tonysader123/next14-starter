import styles from "./footer.module.css"

const Footer =() => {
    return (
        <div className ={styles.container}>
            <h1 className = {styles.logo}> Tony Sader's Portfolio</h1>
            <div className ={styles.text}> 
                Website designed by me using next.js framework.
            </div>
        </div>

    )
}

export default Footer;