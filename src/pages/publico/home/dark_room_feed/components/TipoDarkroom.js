import styles from './TipoDarkroom.module.scss';
import straight12 from '../../../../../arquivos/straight/straight12.png';
import { LuBookmark, LuUserRound, LuUsers } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import { IoMdStar } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";
const TipoDarkroom = () => {
    return (
        <div className={styles.area_darkroon_feed_card_topo}>
            <div className={styles.area_darkroon_feed_card_topo_centro}>
                <div className={styles.area_darkroon_feed_card_topo_centro_body}>
                    <img src={straight12} alt='Imagem de darkroom straight12' />
                    <div className={styles.area_darkroon_feed_card_topo_centro_body_texto}>
                        <strong>Casual e Amizades</strong>
                        <p>
                            Se você e seu par estão buscando expandir o círculo de amizades, trocar ideias ou explorar novas conexões de forma leve e respeitosa, esse espaço é pra vocês! Aqui, casais héteros podem conversar, marcar rolês descontraídos, dividir experiências ou simplesmente se divertir trocando histórias com quem está na mesma vibe. Não é um espaço pra pressão, nem pra julgamentos — é sobre afinidade, cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.
                        </p>
                        <span>São Paulo - SP / Brasil</span>
                    </div>
                </div>
                <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom}>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        <LuUsers />
                        <span><strong>251</strong> Membros</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        <div className={styles.area_icone_online}>
                            <LuUserRound />
                            <TbPointFilled className={styles.icone_ponto} />
                        </div>
                        <span><strong>121</strong> Online</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        <LuBookmark />
                        <span><strong>12k</strong> Posts</span>
                    </div>
                </div>
                <div className={styles.area_darkroon_feed_card_topo_centro_right}>
                    <div className={styles.area_darkroon_feed_card_topo_centro_right_topo}>
                        <button>
                            <IoMdStar />
                        </button>
                        <button>
                            <GoKebabHorizontal />
                        </button>
                    </div>
                    <button className={styles.btn_acao}>
                        <span>Entrou</span>
                        <FaRegCircleCheck />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TipoDarkroom;