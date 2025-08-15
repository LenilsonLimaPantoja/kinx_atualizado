import styles from './SelectUsuario.module.scss';
import { RiInformation2Line } from "react-icons/ri";
const SelectUsuario = ({ label, arrayOption, value, onChange, validate }) => {
    return (
        <label className={styles.select_usuario} style={{ borderColor: validate ? '#BC443F' : 'transparent' }}>
            <span>{label}: </span>
            <select value={value} onChange={onChange}>
                {arrayOption?.map((g) => (
                    <option key={g.value} value={g.value}>
                        {g.label}
                    </option>
                ))}
            </select>
            {validate && <RiInformation2Line />}
        </label>
    );
}

export default SelectUsuario;