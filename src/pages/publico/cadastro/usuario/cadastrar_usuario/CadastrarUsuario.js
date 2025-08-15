import { useContext, useState } from 'react';
import styles from './CadastrarUsuario.module.scss';
import InputUsuario from './components_usuario/InputUsuario';
import SelectUsuario from './components_usuario/SelectUsuario';
import { ContextUsuario } from '../usuarioContext/UsuarioContext';

const generos = [
    { value: "", label: "" },
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "nao-binario", label: "Não-binário" },
    { value: "transgenero", label: "Transgênero" },
    { value: "travesti", label: "Travesti" },
    { value: "intersexo", label: "Intersexo" },
    { value: "agenero", label: "Agênero" },
    { value: "bigenero", label: "Bigênero" },
    { value: "pangenero", label: "Pangênero" },
    { value: "genero-fluido", label: "Gênero fluido" },
    { value: "outro", label: "Outro" },
    { value: "prefiro-nao-dizer", label: "Prefiro não dizer" },
];

const sexualidades = [
    { value: "", label: "" },
    { value: "heterossexual", label: "Heterossexual" },
    { value: "homossexual", label: "Homossexual" },
    { value: "lésbica", label: "Lésbica" },
    { value: "gay", label: "Gay" },
    { value: "bissexual", label: "Bissexual" },
    { value: "pansexual", label: "Pansexual" },
    { value: "assexual", label: "Assexual" },
    { value: "demissexual", label: "Demissexual" },
    { value: "sapiossexual", label: "Sapiossexual" },
    { value: "queer", label: "Queer" },
    { value: "arromântico", label: "Arromântico" },
    { value: "poliamoroso", label: "Poliamoroso" },
    { value: "questionando", label: "Questionando" },
    { value: "prefiro-nao-dizer", label: "Prefiro não dizer" },
    { value: "outra", label: "Outra" }
];

const preferenciasSexuais = [
    { value: "", label: "" },
    { value: "heterossexual", label: "Heterossexual" },
    { value: "homossexual", label: "Homossexual" },
    { value: "lésbica", label: "Lésbica" },
    { value: "gay", label: "Gay" },
    { value: "bissexual", label: "Bissexual" },
    { value: "pansexual", label: "Pansexual" },
    { value: "assexual", label: "Assexual" },
    { value: "demissexual", label: "Demissexual" },
    { value: "sapiossexual", label: "Sapiossexual" },
    { value: "arromântico", label: "Arromântico" },
    { value: "polissexual", label: "Polissexual" },
    { value: "graysexual", label: "Graysexual" },
    { value: "queer", label: "Queer" },
    { value: "questionando", label: "Questionando" },
    { value: "prefiro_nao_dizer", label: "Prefiro não dizer" },
    { value: "outro", label: "Outro" }
];

const paises = [
    { value: "", label: "" },
    { value: "Brasil", label: "Brasil" },
    { value: "Argentina", label: "Argentina" }
];

const estadosBrasil = [
    { value: "", label: "" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" }
];

const cidades = [
    { value: "", label: "" },
    { label: "Água Clara", value: "agua_clara" },
    { label: "Alcinópolis", value: "alcinopolis" },
    { label: "Amambai", value: "amambai" },
    { label: "Anastácio", value: "anastacio" },
    { label: "Anaurilândia", value: "anaurilandia" },
    { label: "Angélica", value: "angelica" },
    { label: "Antônio João", value: "antonio_joao" },
    { label: "Aparecida do Taboado", value: "aparecida_do_taboado" },
    { label: "Aquidauana", value: "aquidauana" },
    { label: "Aral Moreira", value: "aral_moreira" },
    { label: "Bandeirantes", value: "bandeirantes" },
    { label: "Bataguassu", value: "bataguassu" }
];

const CadastrarUsuario = () => {
    const {
        nomeUsuario, setNomeUsuario,
        nome, setNome,
        dataNascimento, setDataNascimento,
        genero, setGenero,
        sexualidade, setSexualidade,
        preferencia, setPreferencia,
        pais, setPais,
        estado, setEstado,
        cidade, setCidade,
        validate, setValidate
    } = useContext(ContextUsuario);

    const updateField = (campo, setter) => (e) => {
        const valor = e.target.value;
        setter(valor);
        setValidate((prev) => ({
            ...prev,
            [campo]: !!valor.trim()
        }));
    };

    const onChangeDataNascimento = (e) => {
        let data = e.target.value;
        data = data.replace(/[^\d/]/g, '').replace(/\/+/g, '/');

        if (data.length === 2 && !data.includes('/')) {
            data += '/';
        } else if (data.length === 5 && data.indexOf('/', 3) === -1) {
            data += '/';
        }

        setDataNascimento(data);
        setValidate((prev) => ({
            ...prev,
            dataNascimento: !!data.trim()
        }));
    };

    return (
        <div className={styles.container_cadastrar_usuario}>
            <h1>Informações Básicas.</h1>
            <p>
                Os dados inseridos neste cadastro não serão publicados automaticamente. Você terá total controle sobre o que será exibido ou mantido privado, podendo gerenciar essas configurações diretamente no seu ambiente de usuário.
            </p>
            <form>
                <InputUsuario
                    validate={!validate?.nomeUsuario}
                    label="Nome de Usuário"
                    value={nomeUsuario}
                    onChange={updateField('nomeUsuario', setNomeUsuario)}
                />
                <InputUsuario
                    validate={!validate?.nome}
                    label="Nome"
                    value={nome}
                    onChange={updateField('nome', setNome)}
                />
                <div className={styles.inputs_grupo}>
                    <InputUsuario
                        validate={!validate?.dataNascimento}
                        label="Data de Nascimento"
                        value={dataNascimento}
                        onChange={onChangeDataNascimento}
                    />
                    <SelectUsuario
                        validate={!validate?.genero}
                        label="Genero"
                        arrayOption={generos}
                        value={genero}
                        onChange={updateField('genero', setGenero)}
                    />
                </div>
                <div className={styles.inputs_grupo}>
                    <SelectUsuario
                        validate={!validate?.sexualidade}
                        label="Sexualidade"
                        arrayOption={sexualidades}
                        value={sexualidade}
                        onChange={updateField('sexualidade', setSexualidade)}
                    />
                    <SelectUsuario
                        validate={!validate?.preferencia}
                        label="Preferência"
                        arrayOption={preferenciasSexuais}
                        value={preferencia}
                        onChange={updateField('preferencia', setPreferencia)}
                    />
                </div>
                <div className={styles.inputs_grupo}>
                    <SelectUsuario
                        validate={!validate?.pais}
                        label="País"
                        arrayOption={paises}
                        value={pais}
                        onChange={updateField('pais', setPais)}
                    />
                    <SelectUsuario
                        validate={!validate?.estado}
                        label="Estado"
                        arrayOption={estadosBrasil}
                        value={estado}
                        onChange={updateField('estado', setEstado)}
                    />
                    <SelectUsuario
                        validate={!validate?.cidade}
                        label="Cidade"
                        arrayOption={cidades}
                        value={cidade}
                        onChange={updateField('cidade', setCidade)}
                    />
                </div>
            </form>
        </div>
    );
};

export default CadastrarUsuario;