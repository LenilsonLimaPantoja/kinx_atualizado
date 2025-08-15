import styles from './DarkroonsLista.module.scss';
import straight from '../../../../../arquivos/straight/straight.png';
import straight2 from '../../../../../arquivos/straight/straight2.png';
import straight3 from '../../../../../arquivos/straight/straight3.png';
import straight4 from '../../../../../arquivos/straight/straight4.png';
import straight5 from '../../../../../arquivos/straight/straight5.png';
import straight6 from '../../../../../arquivos/straight/straight6.png';
import straight7 from '../../../../../arquivos/straight/straight7.png';
import { LuUsers } from "react-icons/lu";
import { LuBookmark, LuUserRound } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import lock from '../../../../../arquivos/icones/lock.png';
import logout from '../../../../../arquivos/icones/logout.png';
import { GoKebabHorizontal } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
const lista = [
    { img: straight, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: false, entrou: true, },
    { img: straight2, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: false, entrou: true, },
    { img: straight3, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: true, entrou: false, },
    { img: straight4, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: false, entrou: false, },
    { img: straight5, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: false, entrou: true, },
    { img: straight6, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: true, entrou: false, },
    { img: straight7, titulo: "Casual e Amizades", texto: "prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.", membros: 251, online: 121, posts: "12k", privado: false, entrou: false, }
];
const DarkroonsLista = () => {
    const navigation = useNavigate();
    return (
        <div className={styles.container_darkrooms_lista}>
            {lista?.map((item, index) => (
                <div onClick={() => navigation('/login/darkroom/feed/logado')} key={index} className={styles.container_darkrooms_lista_card}>
                    <img src={item?.img} alt='Imagem de straight' />
                    <div className={styles.container_darkrooms_lista_card_body}>
                        <div className={styles.container_darkrooms_lista_card_body_top}>
                            <span>{item?.titulo}</span>
                            <p>{item?.texto}</p>
                        </div>
                        <div className={styles.container_darkrooms_lista_card_body_bottom}>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    <LuUsers />
                                </div>
                                <span>{item?.membros} Membros</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    <LuUserRound />
                                    <TbPointFilled className={styles.icone_ponto} />
                                </div>
                                <span>{item?.online} Online</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    <LuBookmark />
                                </div>
                                <span>{item?.posts}k Posts</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_darkrooms_lista_card_right}>
                        <div className={styles.btns_top}>
                            {item?.privado && !item?.entrou &&
                                <button className={styles.privado}>
                                    <img src={lock} alt='Imagem de icone lock' />
                                </button>
                            }
                            {item?.privado && !item?.entrou &&
                                <button className={styles.solicitar}>
                                    <span>Solicitar</span>
                                    <img src={logout} alt='Imgem de icone logout' />
                                </button>
                            }
                            {!item?.privado && !item?.entrou &&
                                <button className={styles.entrar}>
                                    <span>Entrar</span>
                                    <img src={logout} alt='Imgem de icone logout' />
                                </button>
                            }
                            {item?.entrou &&
                                <button>
                                    <FaRegCircleCheck />
                                </button>
                            }
                        </div>
                        <button className={styles.btn_menu}>
                            <GoKebabHorizontal />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default DarkroonsLista;