import styles from './FinalizarCadastro.module.scss';
import { IoIosCheckmarkCircle } from "react-icons/io";

const FinalizarCadastro = () => {
    return (
        <div className={styles.container_finalizar_cadastro}>
            <h1>Estamos quase finalizando...</h1>
            <p>
                O cadastro inicial foi concluído! Para aproveitar todos os recursos da plataforma, recomendamos que você complete seu perfil. Se preferir, você pode fazer isso mais tarde clicando em 'Pular' ou avançar agora clicando em 'Avançar'
            </p>
            <div className={styles.checkboxes}>
                <div className={styles.checkbox}>
                    <IoIosCheckmarkCircle />
                    <span>Cadastro Básico</span>
                </div>
                <div className={styles.checkbox}>
                    <IoIosCheckmarkCircle />
                    <span>Perfil e Preferências</span>
                </div>
                <div className={styles.checkbox}>
                    <IoIosCheckmarkCircle />
                    <span>Características Físicas</span>
                </div>
            </div>
        </div>
    )
}
export default FinalizarCadastro;