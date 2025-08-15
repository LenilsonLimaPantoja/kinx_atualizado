import styles from './TelaCodigo.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaCodigo = ({ toggleDrawer, setEtapa }) => {

    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <span>Enviamos um código para você</span>
                    <p>Confira seu e-mail para pegar o código de confirmação. Se você precisar solicitar um novo código, volte e selecione novamente uma confirmação.</p>
                </div>
                <div className={styles.area_form}>
                    <form>
                        <Input name='usuario' placeholder='Digite seu Código de 6 Digitos' type='text' />
                        <ButtonComponent text="Continuar" onClick={() => setEtapa(5)} type='button' />
                        <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(3)} type='button' />
                    </form>
                </div>
            </div>
            <span className={styles.text_bottom} onClick={() => null}>
                Entre em contato com o <span>Suporte do Kinx</span> caso você não tenha acesso.
            </span>
        </>
    )
}

export default TelaCodigo;