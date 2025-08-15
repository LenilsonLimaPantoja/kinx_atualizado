import styles from './TelaCadastrarUsuario.module.scss';
import { TbArrowLeft } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import AvisoPrivacidade from './aviso_privacidade/AvisoPrivacidade';
import { useContext, useEffect, useState } from 'react';
import SelecionarPerfil from './selecionar_perfil/SelecionarPerfil';
import CadastrarUsuario from './cadastrar_usuario/CadastrarUsuario';
import FinalizarCadastro from './finalizar_cadastro/FinalizarCadastro';
import kinxImg from '../../../../arquivos/image.png';
import { ContextUsuario } from './usuarioContext/UsuarioContext';
import Header from '../../../../components/Header';
import LoadingSpin from '../../../../components/LoadingSpin';

const TelaCadastrarUsuario = () => {
    const { etapa, handleEtapa } = useContext(ContextUsuario); // Estado para controlar a etapa do cadastro
    const navigation = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    useEffect(() => {
        handleLoading();
    }, []);

    return (
        <>
            {loading && <LoadingSpin />}
            <div className={styles.area_container_tela_cadastrar_usuario}>
                <Header />
                {etapa <= 4 ?
                    <div className={styles.container_tela_cadastrar_usuario}>
                        <form className={styles.area_tela_cadastrar_usuario}>
                            <div className={styles.voltar}>
                                <TbArrowLeft onClick={etapa > 1 ? () => handleEtapa(etapa - 1) : () => navigation(-1)} />
                            </div>
                            {etapa === 1 && (<AvisoPrivacidade />)}
                            {etapa === 2 && (<SelecionarPerfil />)}
                            {etapa === 3 && (<CadastrarUsuario />)}
                            {etapa === 4 && (<FinalizarCadastro />)}
                            <div className={styles.botoes}>
                                <button type={etapa < 5 ? 'button' : 'submit'} className={styles.botao_avançar} onClick={() => handleEtapa(etapa + 1)}>
                                    <MdKeyboardArrowRight />
                                    <span>Avançar</span>
                                </button>
                            </div>
                        </form>
                        <div className={styles.barra_carregamento}>
                            <div className={styles.progresso} style={{ width: `${etapa * 20}%` }}></div>
                        </div>
                    </div>
                    :
                    <div className={styles.container_finalizado}>
                        <img src={kinxImg} alt="Kinx Logo" className={styles.kinx_logo} />
                    </div>
                }
            </div>
        </>
    )
}
export default TelaCadastrarUsuario;