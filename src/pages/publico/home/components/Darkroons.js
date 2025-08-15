import styles from './Darkroons.module.scss';
import { IoMdLogOut } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { MdOutlineLock } from "react-icons/md";
import straight from '../../../../arquivos/straight/straight.png';
import straight1 from '../../../../arquivos/straight/straight1.png';
import straight2 from '../../../../arquivos/straight/straight2.png';
import straight3 from '../../../../arquivos/straight/straight3.png';
import straight4 from '../../../../arquivos/straight/straight4.png';
import straight5 from '../../../../arquivos/straight/straight5.png';
import straight6 from '../../../../arquivos/straight/straight6.png';
import straight7 from '../../../../arquivos/straight/straight7.png';
import straight8 from '../../../../arquivos/straight/straight8.png';
import straight9 from '../../../../arquivos/straight/straight9.png';
import straight10 from '../../../../arquivos/straight/straight10.png';
import straight11 from '../../../../arquivos/straight/straight11.png';
import straight12 from '../../../../arquivos/straight/straight12.png';
import straight13 from '../../../../arquivos/straight/straight13.png';
import straight14 from '../../../../arquivos/straight/straight14.png';
import logout2 from '../../../../arquivos/icones/logout2.png';
import PostagensRecentes from './PostagensRecentes';
import lock from '../../../../arquivos/icones/lock.png';
import { useNavigate } from 'react-router-dom';

const grupos = [
    {
        nome: 'Straight World',
        topicos: [
            {
                imagem: straight,
                titulo: 'Casual e Amizades',
                subtitulo: 'Héteros Cis',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight1,
                titulo: 'Relacionamento Sério',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight2,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight3,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight4,
                titulo: 'After Party',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight5,
                titulo: 'Off Road ',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Swing Partys',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight8,
                titulo: 'Héteros Cis',
                subtitulo: 'Héteros Cis',
                membros: 165,
                privado: false,
            }
        ],
    },
    {
        nome: 'Vale dos Homens',
        topicos: [
            {
                imagem: straight9,
                titulo: 'Friends',
                subtitulo: 'Gays',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight10,
                titulo: 'Algo Sério',
                subtitulo: 'Gays',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight11,
                titulo: 'Apenas Maduros',
                subtitulo: 'Gays',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight12,
                titulo: 'Twinks',
                subtitulo: 'Gays',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight13,
                titulo: 'Ursos',
                subtitulo: 'Gays',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight14,
                titulo: 'Daddys ',
                subtitulo: 'Gays',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Gays',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Off Partys',
                subtitulo: 'Gays',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight8,
                titulo: 'Marmitas',
                subtitulo: 'Gays',
                membros: 165,
                privado: false,
            }
        ],
    },
    {
        nome: 'Só Elas',
        topicos: [
            {
                imagem: straight,
                titulo: 'Casual e Amizades',
                subtitulo: 'Lésbicas',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight1,
                titulo: 'Relacionamentos',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight2,
                titulo: 'Apenas Maduros',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight3,
                titulo: 'Apenas Jovens',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight4,
                titulo: 'After Party',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight5,
                titulo: 'Off Road ',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Swing Partys',
                subtitulo: 'Lésbicas',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight8,
                titulo: 'Swing Partys',
                subtitulo: 'Lésbicas',
                membros: 165,
                privado: true,
            }
        ],
    },
    {
        nome: 'Transex',
        topicos: [
            {
                imagem: straight,
                titulo: 'Casual e Amizades',
                subtitulo: 'Héteros Cis',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight1,
                titulo: 'Relacionamentos',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight2,
                titulo: 'Apenas Maduros',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight3,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight4,
                titulo: 'After Party',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight5,
                titulo: 'Off Road ',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Swing Partys',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight8,
                titulo: 'Swing Partys',
                subtitulo: 'Héteros Cis',
                membros: 165,
                privado: false,
            }
        ],
    }
];
const Darkroons = () => {
    const navigation = useNavigate();
    return (
        <div className={styles.home_topicos_postagens}>
            <div className={styles.home_topicos_postagens_area}>
                <div className={styles.home_topicos_area}>
                    {grupos?.map((item, indexI) => (
                        <div key={indexI} className={styles.home_topicos}>
                            <div className={styles.home_topicos_area_titulo}>
                                <h2>
                                    {item?.nome}
                                </h2>
                                <span>Tópicos em Alta</span>
                            </div>
                            <div className={styles.home_topicos_area_card}>
                                {item?.topicos.map((topico, indexT) => (
                                    <div onClick={() => navigation('/login/darkroom/feed/logado')} key={indexT} className={styles.home_topicos_card}>
                                        <img src={topico?.imagem} alt='Titulo da imagem aqui' />
                                        <div className={styles.home_topicos_card_body}>
                                            <div className={styles.home_topicos_card_body_area_top}>
                                                <span className={styles.home_topicos_card_body_titulo}>{topico?.titulo}</span>
                                                <span className={styles.home_topicos_card_body_subtitulo}>{topico?.subtitulo}</span>
                                            </div>
                                            <div className={styles.home_topicos_card_body_area_bottom}>
                                                <LuUsers />
                                                <span><strong>{topico?.membros}</strong> Membros</span>
                                            </div>
                                        </div>
                                        <div className={styles.home_topicos_right}>
                                            {topico?.privado && (
                                                <button className={styles.home_topicos_right_btn1}>
                                                    <img src={lock} alt='Imagem de icone lock' />
                                                </button>
                                            )}
                                            <button>
                                                <img src={logout2} alt='Imagem de icone logout' />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.home_topicos_area_bottom}>
                                <button onClick={() => navigation('/login/darkroom/feed')}>Ver Mais</button>
                            </div>
                        </div>
                    ))}
                </div>
                <PostagensRecentes />
            </div>
        </div>
    )
}
export default Darkroons;