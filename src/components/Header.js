import styles from './Header.module.scss';
import logo from '../arquivos/logo.png';
import { CgMenuRight } from "react-icons/cg";
import { useState } from 'react';
import DrawerFormulario from './DrawerFormulario';
import { useLocation, useNavigate } from 'react-router-dom';
import perfil from '../arquivos/perfil.png';
import { ReactComponent as Messages } from '../arquivos/icones/messages.svg';
import { GoKebabHorizontal } from "react-icons/go";

const Header = ({ logado }) => {
    const [isOpenClose, setIsOpenClose] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className={styles.header}>
                <img onClick={() => navigation('/login')} src={logo} alt='Logo Kinx' className={styles.logo} />
                <ul>
                    <li className={`${location.pathname === '/login' ? styles.li_selected : ''}`} onClick={() => navigation('/login')}>Home</li>
                    <li className={`${location.pathname === '/login/dev' ? styles.li_selected : ''}`} onClick={() => alert("Criadores em desenvolvimento!")}>Criadores</li>
                    <li className={`${location.pathname === '/login/home' ? styles.li_selected : ''}`} onClick={() => navigation('/login/home')}>Darkrooms</li>
                    <li className={`${location.pathname === '/login/dev' ? styles.li_selected : ''}`} onClick={() => alert("Eventos em desenvolvimento!")}>Eventos</li>
                    <li className={`${location.pathname === '/login/dev' ? styles.li_selected : ''}`} onClick={() => alert("Suporte em desenvolvimento!")}>Suporte</li>
                </ul>
                {logado ?
                    <div className={styles.header_logado}>
                        <div className={styles.area_img_user}>
                            <div className={styles.area_img_perfil}>
                                <img src={perfil} alt='Imagem de perfil' />
                            </div>
                            <div className={styles.area_img_user_texto}>
                                <strong>@Usernovo</strong>
                                <span>Usuário</span>
                            </div>
                        </div>
                        <div className={styles.area_icones_user}>
                            <Messages />
                            <button className={styles.notificacoes_number}>
                                2
                            </button>
                            <button className={styles.menu_btn}>
                                <GoKebabHorizontal />
                            </button>
                        </div>
                    </div>
                    :
                    <div className={styles.header_deslogado}>
                        <button className={styles.button} onClick={() => alert('Registre-se Agora foi clicado!')}>Registre-se Agora!</button>
                        {/* <button className={styles.button} onClick={() => setIsOpenClose((prevState) => !prevState)}>Entrar</button>
                    <button className={styles.btn_menu} onClick={() => setIsOpenClose((prevState) => !prevState)}>
                        <CgMenuRight />
                    </button> */}
                        <button className={styles.button} onClick={() => alert('Menu foi clicado!')}>Entrar</button>
                        <button className={styles.btn_menu} onClick={() => alert('Menu foi clicado!')}>
                            <CgMenuRight />
                        </button>
                    </div>
                }
            </div>
            <DrawerFormulario isOpenClose={isOpenClose} setIsOpenClose={setIsOpenClose} />
        </>
    )
}
export default Header;