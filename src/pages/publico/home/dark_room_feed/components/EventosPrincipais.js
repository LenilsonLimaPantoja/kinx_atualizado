import styles from './EventosPrincipais.module.scss';
import { LuUsers } from 'react-icons/lu';
import lock from '../../../../../arquivos/icones/lock.png';
import logout from '../../../../../arquivos/icones/logout.png';
import { FaRegCircleCheck } from "react-icons/fa6";
const EventosPrincipais = () => {
    return (
        <div className={styles.container_eventos_principais}>
            <h2>Eventos Principais</h2>
            <div className={styles.area_eventos_principais}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div key={index} className={styles.evento_principal}>
                        <div className={styles.eventos_principais_left}>
                            <div className={styles.eventos_principais_left_topo}>
                                <strong>21</strong>
                                <strong>Set</strong>
                                <strong>25</strong>
                            </div>
                            <span className={styles.hora}>23:00</span>
                        </div>
                        <div className={styles.eventos_principais_body}>
                            <strong>Festa Privada</strong>
                            <p>
                                Festa prive só para casais jovens e
                                selecionados caso tenha interesse
                                inscreva-se agora...
                            </p>
                            <div className={styles.eventos_principais_body_bottom}>
                                <LuUsers />
                                <span>30 Vagas</span>
                            </div>
                        </div>
                        <div className={styles.eventos_principais_right}>
                            <button className={styles.btn_lock}>
                                <img src={lock} alt='Imagem de icone lock' />
                            </button>
                            <button>
                                <img src={logout} alt='Imagem de icone logout' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventosPrincipais;