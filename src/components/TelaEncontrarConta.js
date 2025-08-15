import styles from './TelaEncontrarConta.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaEncontrarConta = ({ toggleDrawer, setEtapa }) => {

    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <span>Encontrar sua Conta</span>
                    <p>Informe se e-mail, número de telefone, CPF ou CNPJ ou nome de usuário que está associado a sua conta.</p>
                </div>
                <div className={styles.area_form}>
                    <form>
                        <Input name='usuario' placeholder='Usuário, CPF, CNPJ ou E-mail' type='text' />
                        <ButtonComponent text="Continuar" onClick={() => setEtapa(3)} type='submit' />
                        <ButtonComponent bgColor='transparent' border={true} color="#707070" text="Cancelar" onClick={() => setEtapa(1)} type='button' />
                    </form>
                </div>
            </div>
            <span className={styles.text_bottom} onClick={() => null}>
                Entre em contato com o <span>Suporte do Kinx</span> caso você não tenha acesso.
            </span>
        </>
    )
}

export default TelaEncontrarConta;