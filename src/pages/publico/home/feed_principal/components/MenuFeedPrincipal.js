import { useState } from 'react';
import styles from './MenuFeedPrincipal.module.scss';
import { ReactComponent as Icon } from '../../../../../arquivos/icones/Vector.svg';
import compass from '../../../../../arquivos/icones/compass.png';

const MenuFeedPrincipal = ({ menuSelecionado, setMenuSelecionado }) => {

    return (
        <div className={styles.container_menu_feed_principal}>
            <div className={styles.container_menu_feed_principal_left}>
                <button className={`${menuSelecionado === 1 ? styles.menu_seleciona : ''}`} onClick={() => setMenuSelecionado(1)}>
                    <Icon />
                    <span>Agora</span>
                </button>
                <button className={`${menuSelecionado === 2 ? styles.menu_seleciona : ''}`} onClick={() => setMenuSelecionado(2)}>
                    <span>Darkrooms</span>
                </button>
            </div>
            <button className={styles.btn_menu_feed_principal_right}>
                <img src={compass} alt='Imagem de icone compass' />
            </button>
        </div>
    )
}
export default MenuFeedPrincipal;