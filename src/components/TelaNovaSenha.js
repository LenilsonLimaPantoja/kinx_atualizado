import styles from './TelaNovaSenha.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const TelaNovaSenha = ({ toggleDrawer, setEtapa }) => {

    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <span>Agora você necessita alterar sua senha</span>
                    <p>Você precisa cadastrar uma nova senha de 8 dígitos com letras e Números, e se preferir caracteres especiais.</p>
                </div>
                <div className={styles.area_form}>
                    <form>
                        <Input name='usuario' placeholder='Digite sua Nova Senha' type='password' />
                        <Input name='usuario' placeholder='Repita sua Senha' type='password' />
                        <ButtonComponent text="Continuar" onClick={() => setEtapa(6)} type='submit' />
                        <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(4)} type='submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default TelaNovaSenha;