import styles from './TelaLogin.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { SiGoogle } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaLogin = ({ toggleDrawer, setEtapa }) => {
    const [loginRegistrar, setLoginRegistrar] = useState(false);

    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <span>Welcome Back!</span>
                    <p>Olá Amigo, Por favor, preencha suas informações.</p>
                </div>
                <div className={styles.area_form}>
                    <div className={styles.login_registrar}>
                        <button
                            onClick={() => setLoginRegistrar(false)}
                            style={{
                                backgroundColor: !loginRegistrar ? '#CBFB45' : 'transparent',
                                color: !loginRegistrar ? '#000' : '#707070'
                            }}
                        >Login</button>
                        <button
                            onClick={() => setLoginRegistrar(true)}
                            style={{
                                backgroundColor: loginRegistrar ? '#CBFB45' : 'transparent',
                                color: loginRegistrar ? '#000' : '#707070'
                            }}
                        >Registrar-se</button>
                    </div>
                    <form>
                        <Input name='usuario' placeholder='Usuário, CPF, CNPJ ou E-mail' type='text' />
                        <Input name='senha' placeholder='Senha' type='password' />
                        <ButtonComponent text="Continuar" onClick={() => alert("Clicado")} type='submit' />
                    </form>
                </div>
            </div>
            <div className={styles.ou_login}>
                <div className={styles.linha}></div>
                <span>ou continue com</span>
                <div className={styles.linha}></div>
            </div>
            <div className={styles.area_icones_login}>
                <SiGoogle />
                <FaXTwitter />
                <FaApple />
            </div>
            <span className={styles.esqueceu_senha} onClick={() => setEtapa(2)}>
                Esqueceu sua senha?
            </span>
        </>
    )
}

export default TelaLogin;