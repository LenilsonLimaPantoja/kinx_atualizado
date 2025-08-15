import styles from './PostFeed.module.scss';
import { ReactComponent as Temporario } from '../../../../../arquivos/icones/temporario.svg';
import { ReactComponent as Menu } from '../../../../../arquivos/icones/menu.svg';
import { BsChatSquare, BsHeart } from "react-icons/bs";
import logout from '../../../../../arquivos/icones/logout.png';
import straight from '../../../../../arquivos/straight/straight.png';
import { TbPointFilled } from "react-icons/tb";

const PostFeed = () => {
    return (
        <div className={styles.darkrooms_populares_agora}>
            {Array.from({ length: 3 }).map((item, index) => (
                <div key={index} className={styles.card_agora}>
                    <div className={styles.card_agora_topo}>
                        <div className={styles.card_agora_topo_left}>
                            <img src={straight} alt='Imagem icone straight' />
                            <strong>Casual e Amizades</strong>
                            <TbPointFilled />
                            <span>08 Minutos Atrás</span>
                        </div>
                        <div className={styles.card_agora_topo_right}>
                            <Temporario />
                            <button>
                                <img src={logout} alt='Imagem de icone logout' />
                            </button>
                        </div>
                    </div>
                    <p className={styles.card_agora_paragrafo}>Estou me busca de amizades e conhecer pessoas interessantes, caso tenha interesse manda mensagem na DM. </p>
                    <div className={styles.card_agora_tags}>
                        <span>Solateita</span>
                        <span>Animado</span>
                        <span>Animais</span>
                        <span>Madura</span>
                    </div>
                    <div className={styles.card_agora_img_area}></div>
                    <div className={styles.card_agora_bottom}>
                        <div className={styles.card_agora_bottom_left}>
                            <div className={styles.card_agora_bottom_left_curtida_coment}>
                                <BsHeart />
                                <span>156</span>
                            </div>
                            <div className={styles.card_agora_bottom_left_curtida_coment}>
                                <BsChatSquare />
                                <span>21</span>
                            </div>
                        </div>
                        <Menu className={styles.card_agora_bottom_icone_menu} />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default PostFeed;