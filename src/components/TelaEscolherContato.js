import styles from './TelaEscolherContato.module.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ButtonComponent from './ButtonComponent';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { useState } from 'react';

const TelaEscolherContato = ({ toggleDrawer, setEtapa }) => {
    const [contatoSelecionado, setContatoSelecionado] = useState(1);
    return (
        <>
            <div className={styles.area_1}>
                <div className={styles.area_close}>
                    <button onClick={toggleDrawer}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <div className={styles.titulo_text}>
                    <span>Qual o meio de contato para envio de Código de Recuperação?</span>
                    <p>Precisamos validar sua identidade antes de realização a recuperação, selecione a opção para envio do código:</p>
                </div>
                <div className={styles.area_form}>
                    <form>
                        <div className={styles.opcao_contato}>
                            <span className={styles.texto_opcao}>
                                Enviar para E-mail <strong>james*****x@gmail.com</strong>
                            </span>
                            {contatoSelecionado === 1 ?
                                <RiCheckboxCircleFill onClick={() => setContatoSelecionado(1)} />
                                :
                                <RiCheckboxBlankCircleLine onClick={() => setContatoSelecionado(1)} />
                            }
                        </div>
                        <div className={styles.opcao_contato}>
                            <span className={styles.texto_opcao}>
                                Enviar para o celular <strong>+55 67 9*****20</strong>
                            </span>
                            {contatoSelecionado === 2 ?
                                <RiCheckboxCircleFill onClick={() => setContatoSelecionado(2)} />
                                :
                                <RiCheckboxBlankCircleLine onClick={() => setContatoSelecionado(2)} />
                            }
                        </div>

                        <ButtonComponent text="Continuar" onClick={() => setEtapa(4)} type='button' />
                        <ButtonComponent bgColor="transparent" color="#707070" border={true} text="Cancelar" onClick={() => setEtapa(2)} type='button' />
                    </form>
                </div>
            </div>
            <span className={styles.text_bottom} onClick={() => null}>
                Entre em contato com o <span>Suporte do Kinx</span> caso você não tenha acesso.
            </span>
        </>
    )
}

export default TelaEscolherContato;