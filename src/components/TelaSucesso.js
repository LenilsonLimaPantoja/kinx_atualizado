import styles from './TelaSucesso.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ButtonComponent from './ButtonComponent';
import { FaRegCircleCheck } from "react-icons/fa6";

const TelaSucesso = ({ toggleDrawer, setEtapa }) => {

    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <FaRegCircleCheck/>
                    <span>Senha alterada com Sucesso!</span>
                    <p>Faça o login novamente com a nova senha.</p>
                </div>
                <div className={styles.area_form}>
                    <form>
                        <ButtonComponent text="Voltar ao Login" onClick={() => setEtapa(1)} type='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default TelaSucesso;