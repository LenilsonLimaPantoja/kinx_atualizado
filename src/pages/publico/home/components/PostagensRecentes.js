import styles from './PostagensRecentes.module.scss';
import { TbPointFilled } from "react-icons/tb";
import { Fragment } from 'react/jsx-runtime';
import postagem from '../../../../arquivos/postagem.png';
import straight from '../../../../arquivos/straight/straight.png';
const PostagensRecentes = () => {
    return (
        <div className={styles.home_area_postagens}>
            <div className={styles.home_postagens}>
                <div className={styles.home_postagens_area_top}>
                    <span>Postagens Recentes</span>
                </div>
                {Array.from({ length: 3 }).map((item, index) => (
                    <Fragment key={index}>
                        <div className={styles.home_postagens_linha_dividir}></div>
                        <div className={styles.home_postagens_card}>
                            <div className={styles.home_postagens_card_body}>
                                <div className={styles.home_postagens_card_body_top}>
                                    <img src={straight} alt='Titulo da imagem aqui' />
                                    <strong>Swing</strong>
                                    <TbPointFilled />
                                    <span>08 Minutos Atrás</span>
                                </div>
                                <p>A procura de sair do tédio, somos um casal jovens interessados ... </p>
                                <div className={styles.home_postagens_card_body_bottom}>
                                    <span>1520 Curtidas</span>
                                    <span>250 Comentarios</span>
                                </div>
                            </div>
                            <img className={styles.home_postagens_card_img_right} src={postagem} alt='Titulo da imagem aqui' />
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
export default PostagensRecentes;