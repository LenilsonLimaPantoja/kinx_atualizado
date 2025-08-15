import styles from './AvisoPrivacidade.module.scss';
import { TbArrowLeft } from "react-icons/tb";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { ContextUsuario } from '../usuarioContext/UsuarioContext';

const AvisoPrivacidade = () => {
    const {
        diaNascimento, setDiaNascimento,
        mesNascimento, setMesNascimento,
        anoNascimento, setAnoNascimento,
        concorda, setConcorda
    } = useContext(ContextUsuario);

    const anoAtual = new Date().getFullYear() - 18; // Considerando que a idade mínima é 18 anos
    const [anos, setAnos] = useState([]);
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const dias = Array.from({ length: 31 }, (_, i) => i + 1);
    const navigation = useNavigate();

    useEffect(() => {
        const anosArray = [];
        for (let i = anoAtual; i >= (anoAtual - 100); i--) {
            anosArray.push({ value: i, label: i });
        }
        setAnos(anosArray);
    }, []);

    const handleConcordaChange = () => {
        setConcorda(prev => !prev);
    }
    return (

        <div className={styles.container_aviso_privacidade}>
            <h1>Navegue de forma <span>anônima.</span></h1>
            <p>
                No KiNX, a sua privacidade é nossa prioridade. Todas as suas informações são protegidas por medidas avançadas de segurança, garantindo sigilo absoluto. Não compartilhamos seus dados sem consentimento, e você tem total controle sobre suas informações. Navegue com confiança, sabendo que sua privacidade está sempre protegida.
            </p>
            <p>
                Por questões de segurança, confirme sua idade, essa informação não será exposta.
            </p>

            <div className={styles.formulario}>
                <select name="dia" value={diaNascimento} onChange={(e) => setDiaNascimento(e.target.value)}>
                    <option value="">Dia</option>
                    {dias.map((dia, idx) => (
                        <option key={idx + 1} value={idx + 1}>{dia}</option>
                    ))}
                </select>
                <select name="mes" value={mesNascimento} onChange={(e) => setMesNascimento(e.target.value)}>
                    <option value="">Mês</option>
                    {meses.map((mes, idx) => (
                        <option key={idx + 1} value={idx + 1}>{mes}</option>
                    ))}
                </select>
                <select name="ano" value={anoNascimento} onChange={(e) => setAnoNascimento(e.target.value)}>
                    <option value="">Ano</option>
                    {anos?.map((ano) => (
                        <option key={ano.value} value={ano.value}>{ano.label}</option>
                    ))}
                </select>
            </div>
            <div className={styles.checkbox}>
                {concorda ?
                    <MdCheckBox title="Concorda com os termos" onClick={handleConcordaChange} />
                    :
                    <MdCheckBoxOutlineBlank title="Concorda com os termos" onClick={handleConcordaChange} />
                }
                <span>Concordo com os termos de uso da plataforma (Clique aqui para ver)</span>
            </div>
        </div>
    )
}
export default AvisoPrivacidade;