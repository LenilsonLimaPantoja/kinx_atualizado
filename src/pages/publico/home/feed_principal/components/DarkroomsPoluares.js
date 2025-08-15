import styles from './DarkroomsPoluares.module.scss';
import straight from '../../../../../arquivos/straight/straight.png';

import { LuUsers } from "react-icons/lu";
import { LuBookmark, LuUserRound } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import fire from '../../../../../arquivos/icones/fire.png';
import logout from '../../../../../arquivos/icones/logout.png';
const DarkroomsPoluares = () => {
    return (
        <div className={styles.area_darkrooms_populares}>
            <div className={styles.darkrooms_populares_area_titulo}>
                <h2>Darkrooms  Populares</h2>
            </div>
            <div className={styles.darkrooms_populares_area_card}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div onClick={() => alert('Em desenvolvimento')} key={index} className={styles.darkrooms_populares_card}>
                        <button className={styles.btn_flutuante}>
                            <img src={fire} title='Icone fire' />
                        </button>
                        <div className={styles.darkrooms_populares_area_img}>
                            <img src={straight} alt='Titulo da imagem aqui' />
                        </div>
                        <div className={styles.darkrooms_populares_card_body}>
                            <div className={styles.darkrooms_populares_card_body_topo}>
                                <span className={styles.darkrooms_populares_card_body_topo_titulo}>Casual e Amizades</span>
                                <span className={styles.darkrooms_populares_card_body_topo_paragrafo}>Casais a procura de outros casais com interesses peculiares. Vamos nos conhecer!</span>
                            </div>
                            <div className={styles.darkrooms_populares_card_body_bottom}>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        <LuUsers />
                                    </div>
                                    <span>251 Membros</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        <LuUserRound />
                                        <TbPointFilled className={styles.icone_ponto} />
                                    </div>
                                    <span>121 Online</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        <LuBookmark />
                                    </div>
                                    <span>12k Posts</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.darkrooms_populares_card_area_sair}>
                            <button>
                                <img src={logout} alt='Icone logout' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DarkroomsPoluares;