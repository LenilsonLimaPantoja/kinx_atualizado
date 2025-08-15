import styles from './MenuDarkroomFeed.module.scss';
import { ReactComponent as Icon } from '../../../../../arquivos/icones/Vector.svg';
import messages from '../../../../../arquivos/icones/messages.svg';
import { GrFormAdd } from "react-icons/gr";

const MenuDarkroomFeed = ({ menuSelecionado, setMenuSelecionado }) => {

    return (
        <div className={styles.container_menu_feed__darkroom}>
            <div className={styles.container_menu_feed__darkroom_left}>
                <button className={`${menuSelecionado === 1 ? styles.menu_seleciona : ''}`} onClick={() => setMenuSelecionado(1)}>
                    <Icon />
                    <span>Agora</span>
                </button>
                <button className={`${menuSelecionado === 2 ? styles.menu_seleciona : ''}`} onClick={() => setMenuSelecionado(2)}>
                    <span>Eventos</span>
                </button>

                <button className={`${menuSelecionado === 3 ? styles.menu_seleciona : ''}`} onClick={() => setMenuSelecionado(3)}>
                    <span>Locais</span>
                </button>
            </div>
            <div className={styles.area_btn_menu_feed_principal_right}>
                <button className={styles.btn_menu_feed_principal_right}>
                    <GrFormAdd />
                    <span className={styles.novo_post}>{menuSelecionado === 1 ? 'Novo Post' : menuSelecionado === 2 ? 'Evento' : 'Local'}</span>
                </button>
                <button className={styles.btn_menu_feed_principal_right}>
                    <img src={messages} alt='Imagem de icone messages' />
                    <span className={styles.qtd_mensagens}>2</span>
                </button>
            </div>
        </div>
    )
}
export default MenuDarkroomFeed;