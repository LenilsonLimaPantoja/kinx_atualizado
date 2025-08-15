import { createContext, useState } from "react";

export const ContextUsuario = createContext();

export const UsuarioContext = ({ children }) => {
    const [etapa, setEtapa] = useState(1);
    const [validate, setValidate] = useState({
        nomeUsuario: true,
        nome: true,
        dataNascimento: true,
        genero: true,
        sexualidade: true,
        preferencia: true,
        pais: true,
        estado: true,
        cidade: true
    });

    const [diaNascimento, setDiaNascimento] = useState();
    const [mesNascimento, setMesNascimento] = useState();
    const [anoNascimento, setAnoNascimento] = useState();
    const [tipoPerfilClicado, setTipoPerfilClicado] = useState(1);
    const [concorda, setConcorda] = useState(false);

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [sexualidade, setSexualidade] = useState('');
    const [preferencia, setPreferencia] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    // 🔧 mover a função para depois dos states para garantir que os valores estejam acessíveis
    const handleEtapa = (opcao) => {
        if (etapa === 3 && (
            !nomeUsuario.trim() || !nome.trim() || !dataNascimento.trim() ||
            !genero || !sexualidade || !preferencia || !pais || !estado || !cidade
        )) {
            setValidate({
                nomeUsuario: !!nomeUsuario.trim(),
                nome: !!nome.trim(),
                dataNascimento: !!dataNascimento.trim(),
                genero: !!genero,
                sexualidade: !!sexualidade,
                preferencia: !!preferencia,
                pais: !!pais,
                estado: !!estado,
                cidade: !!cidade
            });
            return;
        }
        setEtapa(opcao);
    };

    return (
        <ContextUsuario.Provider value={{
            etapa, setEtapa,
            handleEtapa,
            validate, setValidate,

            diaNascimento, setDiaNascimento,
            mesNascimento, setMesNascimento,
            anoNascimento, setAnoNascimento,
            tipoPerfilClicado, setTipoPerfilClicado,
            concorda, setConcorda,

            nomeUsuario, setNomeUsuario,
            nome, setNome,
            dataNascimento, setDataNascimento,
            genero, setGenero,
            sexualidade, setSexualidade,
            preferencia, setPreferencia,
            pais, setPais,
            estado, setEstado,
            cidade, setCidade,
        }}>
            {children}
        </ContextUsuario.Provider>
    );
};
