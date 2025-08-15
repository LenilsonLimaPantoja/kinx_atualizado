import styles from './ButtonComponent.module.scss';

const ButtonComponent = ({ text, onClick, disabled = false, type = 'button', bgColor, color, border }) => {
    return (
        <button
            style={{
                backgroundColor: bgColor || '#CBFB45',
                color: color || '#000',
                border: border ? '2px solid #1c1c1c' : 'none',
            }}
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>
    );
}
export default ButtonComponent;