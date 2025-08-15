import styles from './AjudaFAQ.module.scss';
import Header from '../../../components/Header';
import { MdArrowDropDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import ComoMonetizar from './ComoMonetizar';

const AjudaFAQ = () => {
    const [opcaoClicada, setOpcaoClicada] = useState(7);
    const [perguntaClicada, setPerguntacaoClicada] = useState(0);
    return (
        <div className={styles.container_ajuda_faq}>
            <div className={styles.container_ajuda_faq_header}>
                <Header />
                <div className={styles.container_ajuda_faq_text}>
                    <h1>Como podemos Ajudar?</h1>
                    <p>
                        Tem dúvidas sobre como usar a plataforma, monetizar conteúdos ou participar das comunidades? Acesse nosso FAQ para encontrar respostas rápidas sobre funcionalidades, segurança, pagamentos e muito mais. Se não encontrar o que procura, nosso time de suporte está sempre disponível para ajudar, garantindo que sua experiência no KiNX seja completa, segura e personalizada.
                    </p>
                </div>
            </div>
            <form className={styles.container_ajuda_faq_form}>
                <div className={styles.container_ajuda_faq_label}>
                    <select>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Pagamento">Pagamento</option>
                        <option value="Login">Login</option>
                        <option value="Assinatura">Assinatura</option>
                    </select>
                    <MdArrowDropDown className={styles.icon_arrow} />
                </div>
                <div className={styles.container_ajuda_faq_input}>
                    <IoSearchOutline />
                    <input type="text" placeholder="Procurar Ajuda" />
                    <button>Buscar</button>
                </div>
            </form>
            <div className={styles.area_perguntas_frequentes}>
                <div className={styles.area_perguntas_frequentes_left}>
                    <span onClick={() => setOpcaoClicada(1)}
                        style={{ color: opcaoClicada === 1 ? '#CBFB45' : '#fff' }}
                    >Quem Somos?</span>
                    <span onClick={() => setOpcaoClicada(2)}
                        style={{ color: opcaoClicada === 2 ? '#CBFB45' : '#fff' }}
                    >Como Funciona o KINX?</span>
                    <span onClick={() => setOpcaoClicada(3)}
                        style={{ color: opcaoClicada === 3 ? '#CBFB45' : '#fff' }}
                    >Financeiro</span>
                    <span onClick={() => setOpcaoClicada(4)}
                        style={{ color: opcaoClicada === 4 ? '#CBFB45' : '#fff' }}
                    >Nossas Funcionalidades</span>
                    <span onClick={() => setOpcaoClicada(5)}
                        style={{ color: opcaoClicada === 5 ? '#CBFB45' : '#fff' }}
                    >Minha Conta</span>
                    <span onClick={() => setOpcaoClicada(6)}
                        style={{ color: opcaoClicada === 6 ? '#CBFB45' : '#fff' }}
                    >Fale Conosco</span>
                    <span onClick={() => setOpcaoClicada(7)}
                        style={{ color: opcaoClicada === 7 ? '#CBFB45' : '#fff' }}
                    >Perguntas Frequentes</span>
                </div>
                <div className={styles.area_perguntas_frequentes_right}>
                    <h1>Perguntas Frequentes</h1>
                    <div className={styles.perguntas_frequentes}>
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(1)}
                                style={{ color: perguntaClicada === 1 ? '#CBFB45' : '#fff' }}
                            >Como monetizar com o KINX?</span>
                            {perguntaClicada === 1 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 1 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(2)}
                                style={{ color: perguntaClicada === 2 ? '#CBFB45' : '#fff' }}
                            >O que fazer caso suspeite que alguém acessou minha conta?</span>
                            {perguntaClicada === 2 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 2 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(3)}
                                style={{ color: perguntaClicada === 3 ? '#CBFB45' : '#fff' }}
                            >O KINX é sigiloso? As pessoas veem minhas informações?</span>
                            {perguntaClicada === 3 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 3 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(4)}
                                style={{ color: perguntaClicada === 4 ? '#CBFB45' : '#fff' }}
                            >O que fazer caso suspeite que alguém acessou minha conta?</span>
                            {perguntaClicada === 4 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 4 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(5)}
                                style={{ color: perguntaClicada === 5 ? '#CBFB45' : '#fff' }}
                            >Como recuperar a minha senha?</span>
                            {perguntaClicada === 5 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 5 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(6)}
                                style={{ color: perguntaClicada === 6 ? '#CBFB45' : '#fff' }}
                            >Como funciona o Mecanismo de indicação KINX?</span>
                            {perguntaClicada === 6 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 6 && <ComoMonetizar />}
                        <div className={styles.pergunta}>
                            <span
                                onClick={() => setPerguntacaoClicada(7)}
                                style={{ color: perguntaClicada === 7 ? '#CBFB45' : '#fff' }}
                            >Como realizar a validação de idade no portal?</span>
                            {perguntaClicada === 7 ?
                                <IoIosArrowDropup style={{ color: '#CBFB45' }} />
                                :
                                <IoIosArrowDropdown />
                            }
                        </div>
                        {perguntaClicada === 7 && <ComoMonetizar />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AjudaFAQ;