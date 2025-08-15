import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (rota) => {
        localStorage.setItem('@kinx_token', 'your_token_value');
        navigate(rota);
    }

    const handleEsqueciSenha = (rota) => {
        navigate(rota);
    }

    return (
        <div className={styles.login}>
            <h1>Welcome to the Login Page</h1>
            <button className={styles.loginButton} onClick={() => handleLogin('/')}>Login</button>
            <button className={styles.loginButton} onClick={() => handleEsqueciSenha('/login/senha/esqueceu')}>Alterar Senha</button>
            <button className={styles.loginButton} onClick={() => handleEsqueciSenha('/login/cadastro/usuario')}>Cadastrar Usuário</button>
            <button className={styles.loginButton} onClick={() => handleEsqueciSenha('/login/ajuda')}>Ajuda</button>
        </div>
    )
}
export default Login;