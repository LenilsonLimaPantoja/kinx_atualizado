import styles from './EventosFeed.module.scss';
import { ReactComponent as Menu } from '../../../../arquivos/icones/menu.svg';
import { BsChatSquare, BsHeart } from "react-icons/bs";
import straight from '../../../../arquivos/straight/straight.png';
import { TbPointFilled } from "react-icons/tb";

const EventosFeed = () => {
    return (
        <div className={styles.darkrooms_feed_eventos}>
            {Array.from({ length: 3 }).map((item, index) => (
                <div key={index} className={styles.card_agora}>
                    <div className={styles.card_agora_topo}>
                        <div className={styles.card_agora_topo_left}>
                            <img src={straight} alt='Imagem icone straight' />
                            <strong>@Maralora32</strong>
                            <TbPointFilled />
                            <span>08 Minutos Atrás</span>
                        </div>
                        <div className={styles.card_agora_topo_right}>
                            <span className={styles.qtd_disponivel_evento}>12/100</span>
                            <button>
                                <span className={styles.inscreva_se}>Inscrever-se</span>
                                <span className={styles.inscritos}>12</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.data_hora_evento}>
                        <span className={styles.texto_data_hora}>Data e Hora do Evento:</span>
                        <strong>Hoje | <span>23:30</span></strong>
                    </div>
                    <div className={styles.area_texto_evento}>
                        <strong>Secret Party Black Hole</strong>
                        <p className={styles.card_agora_paragrafo}>
                            Você está convidado(a) para uma noite de prazer, mistério e descobertas. Em um ambiente sofisticado e discreto, selecionei um grupo especial para compartilhar momentos inesquecíveis na maior festa do KINX de Campo Grande - MS,
                            venha conferir <span className={styles.ver_mais}>(Ver Mais)</span></p>
                    </div>
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
export default EventosFeed;