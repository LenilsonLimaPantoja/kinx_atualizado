import styles from './InputUsuario.module.scss';
import { RiInformation2Line } from "react-icons/ri";
const InputUsuario = ({ label, type = "text", value, onChange, validate }) => {
    return (
        <label className={styles.input_usuario} style={{ borderColor: validate ? '#BC443F' : 'transparent' }}>
            <span>{label}: </span>
            <input type={type} value={value} onChange={onChange} />
            {validate && <RiInformation2Line />}
        </label>
    );
}

export default InputUsuario;