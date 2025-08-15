import { Outlet } from 'react-router-dom';
import styles from './Base.module.scss';
const Base = () => {
    return (
        <div className={styles.container_base}>
           <div className={styles.area_base}>
                <Outlet />
           </div>
        </div>
    )
}
export default Base;