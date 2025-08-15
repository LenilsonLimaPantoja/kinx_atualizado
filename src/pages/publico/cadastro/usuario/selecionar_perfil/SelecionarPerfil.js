import { useContext } from 'react';
import styles from './SelecionarPerfil.module.scss';
import { LuSquareUserRound } from "react-icons/lu";
import { MdStorefront } from "react-icons/md";
import { ContextUsuario } from '../usuarioContext/UsuarioContext';

const SelecionarPerfil = () => {
    const { tipoPerfilClicado, setTipoPerfilClicado } = useContext(ContextUsuario);
    return (
        <div className={styles.container_selecionar_perfil}>
            <h1>Selecione um perfil de acesso.</h1>
            <p>
                Os dados inseridos neste cadastro não serão publicados automaticamente. Você terá total controle sobre o que será exibido ou mantido privado, podendo gerenciar essas configurações diretamente no seu ambiente de usuário.
            </p>
            <div className={styles.botoes_perfil}>
                <button type='button' style={{ borderColor: tipoPerfilClicado === 1 ? '#CBFB45' : 'transparent' }} onClick={() => setTipoPerfilClicado(1)}>
                    <LuSquareUserRound />
                    <span>Sou uma Pessoa ou Criador</span>
                </button>
                <button type='button' style={{ borderColor: tipoPerfilClicado === 2 ? '#CBFB45' : 'transparent' }} onClick={() => setTipoPerfilClicado(2)}>
                    <MdStorefront />
                    <span>Sou um Estabelecimento</span>
                </button>
            </div>
        </div>
    )
}
export default SelecionarPerfil;