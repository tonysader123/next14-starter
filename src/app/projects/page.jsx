import Image from "next/image"
import styles from "./projects.module.css"

const ProjectsPage =() => {
    return (
        <div className={styles.container}>
            <div className = {styles.textContainer}>
                <h2 className={styles.subtitle}>Projects</h2>
                <h1 className = {styles.title}>Here you will find some of my professional and personal projects!</h1>
                <p className = {styles.description}>
                    Projects:
                </p>
                <div className ={styles.boxes}>
                    <div className = {styles.box}>
                        <h2 className={styles.subtitle}>Programming</h2>
                        <p className = {styles.details}>Programming projects</p>
                    </div>
                    <div className = {styles.box}>
                        <h2 className={styles.subtitle}>Automation</h2>
                        <p className = {styles.details}>Automation Projects using PLC/SCADA</p>
                    </div>
                    <div className = {styles.box}>
                        <h2 className={styles.subtitle}>Personal Projects</h2>
                        <p className = {styles.details}>Everything Else!</p>
                    </div>
                </div>
            </div>
        <div className ={styles.imgContainer}>
            <Image src ="/about.png"
            alt = "Picture of author"
            fill
            className = {styles.image}></Image>
        </div>
        
        </div>

    );
};

export default ProjectsPage;