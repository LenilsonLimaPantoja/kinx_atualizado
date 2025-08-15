import HeaderHome from '../components/HeaderHome';
import styles from './DarkroomFeedPrincipal.module.scss';
import { useEffect, useState } from 'react';
import LoadingSpin from '../../../../components/LoadingSpin';
import PostagensRecentes from '../components/PostagensRecentes';
import PostFeed from './components/PostFeed';
import DarkroomsPoluares from './components/DarkroomsPoluares';
import MenuFeedPrincipal from './components/MenuFeedPrincipal';
import DarkroonsLista from './components/DarkroonsLista';

const DarkroomFeedPrincipal = () => {
    const [loading, setLoading] = useState(true);
    const [menuSelecionado, setMenuSelecionado] = useState(1);
    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    useEffect(() => {
        handleLoading();
    }, [menuSelecionado]);

    return (
        <>
            {loading && <LoadingSpin />}
            <div className={styles.container_darkroom_feed}>
                <HeaderHome paragrafo="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição." titulo="Darkrooms " tituloBold="Straight" />
                <div className={styles.darkrooms_populares_area}>
                    <div className={styles.darkrooms_populares}>
                        <DarkroomsPoluares />
                        <MenuFeedPrincipal menuSelecionado={menuSelecionado} setMenuSelecionado={setMenuSelecionado} />
                        <div className={styles.darkrooms_populares_area_agora}>
                            {menuSelecionado === 1 ?
                                <PostFeed />
                                :
                                <DarkroonsLista />
                            }
                            <PostagensRecentes />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DarkroomFeedPrincipal;