import Header from '../../../../components/Header';
import styles from './HeaderHome.module.scss';
import arrow from '../../../../arquivos/icones/arrow.png';
const HeaderHome = ({ titulo, tituloBold, paragrafo, icone }) => {
    return (
        <div className={styles.container_header_home}>
            <div className={styles.header_home_area}>
                <Header />
                <div className={styles.container_header_home_texto}>
                    <span className={styles.texto_topo}>
                        <span className={styles.titulo}>{titulo}<strong>{tituloBold}</strong></span>
                        {icone && <img src={arrow} alt='Imagem icone arrow' />}
                    </span>
                    <p>{paragrafo}</p>
                </div>
            </div>
        </div>
    )
}
export default HeaderHome;