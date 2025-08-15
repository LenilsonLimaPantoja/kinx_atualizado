import { useEffect, useState } from 'react';
import Header from '../../../../components/Header';
import LoadingSpin from '../../../../components/LoadingSpin';
import styles from './DarkroomFeed.module.scss';
import membro1 from '../../../../arquivos/membros/membro1.png';
import membro2 from '../../../../arquivos/membros/membro2.png';
import membro3 from '../../../../arquivos/membros/membro3.png';
import membro4 from '../../../../arquivos/membros/membro4.png';
import membro5 from '../../../../arquivos/membros/membro5.png';
import membro6 from '../../../../arquivos/membros/membro6.png';
import overview from '../../../../arquivos/icones/overview.svg';
import EventosPrincipais from './components/EventosPrincipais';
import MenuDarkroomFeed from './components/MenuDarkroomFeed';
import TipoDarkroom from './components/TipoDarkroom';
import PostFeed from '../feed_principal/components/PostFeed';
import { LuUsers } from "react-icons/lu";
import { LuBookmark, LuUserRound } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import EventosFeed from '../eventos_feed/EventosFeed';
import PostFeedLocais from '../feed_principal/components/PostFeedLocais';

const DarkroomFeed = () => {
    const [loading, setLoading] = useState(true);
    const [menuSelecionado, setMenuSelecionado] = useState(1);

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
            <div className={styles.container_darkroon_feed}>
                <div className={styles.area_darkroon_feed}>
                    <Header logado={true} />
                    <TipoDarkroom />
                    <EventosPrincipais />
                    <MenuDarkroomFeed menuSelecionado={menuSelecionado} setMenuSelecionado={setMenuSelecionado} />
                    <div className={styles.darkroon_feed_body}>
                        {menuSelecionado === 1 && <PostFeed />}
                        {menuSelecionado === 2 && <EventosFeed />}
                        {menuSelecionado === 3 && <PostFeedLocais />}
                        <div className={styles.darkroon_feed_body_right}>
                            <div className={styles.darkroon_feed_body_right_body}>
                                <div className={styles.darkroon_feed_body_right_body_topo}>
                                    <strong>Casual e Amizade</strong>
                                    <p>
                                        Se você e seu par estão buscando expandir o círculo de amizades, trocar ideias ou explorar novas conexões de forma leve e respeitosa, esse espaço é pra vocês! Aqui, casais héteros podem conversar, marcar rolês descontraídos, dividir experiências ou simplesmente se divertir trocando histórias com quem está na mesma vibe. Não é um espaço pra pressão, nem pra julgamentos — é sobre afinidade, cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.
                                    </p>
                                </div>
                                <div className={styles.darkroon_feed_body_right_body_info}>
                                    <div className={styles.darkroon_feed_body_right_body_info_opcao}>
                                        <span>Criado em</span>
                                        <span>4, Março 2025</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_info_opcao}>
                                        <span>Darktoom</span>
                                        <span>Pública</span>
                                    </div>
                                </div>
                                <div className={styles.darkroon_feed_body_right_body_dados}>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <LuUsers />
                                        <span>251 Membros</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <div className={styles.darkroon_feed_body_right_body_dados_opcao_online}>
                                            <LuUserRound />
                                            <TbPointFilled className={styles.icone_ponto} />
                                        </div>
                                        <span>121 Online</span>
                                    </div>
                                    <div className={styles.darkroon_feed_body_right_body_dados_opcao}>
                                        <LuBookmark />
                                        <span>12k Posts</span>
                                    </div>
                                </div>
                                <div className={styles.dividir}></div>
                                <div className={styles.area_tags}>
                                    <strong>Tags do Darkroom</strong>
                                    <div className={styles.tags}>
                                        <span>Hétero</span>
                                        <span>Amizade</span>
                                        <span>Festas</span>
                                        <span>Casual</span>
                                        <span>Jovens</span>
                                        <span>Sigilo</span>
                                        <span>Swing</span>
                                        <span>Viagens</span>
                                    </div>
                                </div>
                                <div className={styles.dividir}></div>
                                <div className={styles.area_membros_moderadores}>
                                    <div className={styles.area_membros}>
                                        <strong>Membros:</strong>
                                        <div className={styles.membros}>
                                            <div className={styles.membros_fotos}>
                                                <div className={styles.membros_fotos_area}>
                                                    <img src={membro1} alt='Imagem de membro 1' />
                                                    <img src={membro2} alt='Imagem de membro 2' />
                                                    <img src={membro3} alt='Imagem de membro 3' />
                                                    <img src={membro4} alt='Imagem de membro 4' />
                                                    <img src={membro5} alt='Imagem de membro 5' />
                                                    <img src={membro6} alt='Imagem de membro 6' />
                                                </div>
                                                <button>+ 234</button>
                                            </div>
                                            <button>
                                                <img src={overview} alt='Imagem de icone de overview' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.area_membros}>
                                        <strong>Moderadores:</strong>
                                        <div className={styles.moderadores}>
                                            <div className={styles.moderador}>
                                                <img src={membro6} alt='Imagem de membro 6' />
                                                <div className={styles.moderador_info}>
                                                    <span>JamesHunterXXX</span>
                                                    <span>Moderador</span>
                                                </div>
                                            </div>
                                            <div className={styles.moderador}>
                                                <img src={membro1} alt='Imagem de membro 1' />
                                                <div className={styles.moderador_info}>
                                                    <span>Kasalxnovinho</span>
                                                    <span>Moderador</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DarkroomFeed;