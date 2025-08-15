import { useNavigate } from 'react-router-dom';
import styles from './BemVindo.module.scss';
const BemVindo = () => {
    const navigate = useNavigate();
    const handleLogin = (rota) => {
        navigate(rota);
    }

    const handleSair = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div className={styles.bem_indo}>
            <h1>Welcome to the Bem Vindo Page</h1>
            <button className={styles.loginButton} onClick={() => handleLogin('/home')}>Home</button>
            <button className={styles.loginButton} onClick={handleSair}>Sair</button>
        </div>
    )
}
export default BemVindo;