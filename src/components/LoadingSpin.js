import styles from './LoadingSpin.module.scss'
const LoadingSpin = () => {
    return(
        <div className={styles.loading}>
                <div className={styles.spin}></div>
            </div>
    )
}
export default LoadingSpin;