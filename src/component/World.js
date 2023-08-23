// 각 컴포넌트가 사용할 CSS를 만들어라

import styles from "./World.module.css";
export default function World(){
    return(
        <div>
            <h2 className={styles.fg}>World</h2>
            <div className={styles.box}></div>
        </div>
    )
}