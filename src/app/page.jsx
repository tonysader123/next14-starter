import Image from "next/image";
import styles from "./home.module.css";

const HomePage = () => {
  return <div className = {styles.container}> 
    <div className ={styles.textcontainer}>
      <h1 className = {styles.Header1}>Hello, <br />my name is Tony Sader and this is my portfolio!<br/></h1>
      <br />
      <br />
      <p className = {styles.Header2}>
        I am a Mechatronics Engineering graduate (B.Eng) based in Burlington, Ontario. <br/>
        <br />
        I haved 7+ years of systems design experience and 4+ years of people management experience.
        My goal in life is to never stop learning! I absolutely love all things tech, art and creating!
        <br/>
        <br />
        My biggest strengths are my optimism, my team collaboration and communication/presentation skills. I love working with clients and team members and believe collaboration is 
        the key to a successful team. I have taken on multiple roles during my professional experience such as people manager, project manager, designer and technical lead. 
        <br/>
        <br />
        In this portfolio you will find many of my personal projects including my current learning path in full stack development, my graphics design business, 
        my photography portfolio and other project work. 
        <br/>
        <br/>
        This website was built by myself during my learning journey. 
        <br />
        <br />
        Below you will find my resume attached. Please do not hesitate to reach out! 
        <br />
        <br />
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Resume</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.socials}>
        <Image src="/brands.png" alt="" fill className={styles.socialImgs}/>
      </div>
    </div> 
    <div className ={styles.imagecontainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default HomePage;