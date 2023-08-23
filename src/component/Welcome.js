import styles from "./Welcome.module.css";
const Welcome = function(){
    return(
        <>
            <h2 className={styles.fg}>Welcome</h2>
            <div className={styles.box} ></div>
        </>
    )
}

export default Welcome;