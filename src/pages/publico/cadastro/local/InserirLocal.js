import { useState } from 'react';
import styles from './InserirLocal.module.scss';
import { IoCloseSharp } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";
import { FaRegImages } from "react-icons/fa";
import { PiVideoBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";

const InserirLocal = () => {
    const [menuSelected, setMenuSelected] = useState(1);
    return (
        <div className={styles.container_inserir_local}>
            <div className={styles.topo}>
                <span>Inserir <strong>Postagem</strong></span>
                <button>
                    <IoCloseSharp />
                </button>
            </div>
            <div className={styles.area_form_menu}>
                <div className={styles.area_menu}>
                    <button onClick={() => setMenuSelected(1)}>
                        <span style={{ fontWeight: menuSelected === 1 ? '700' : '400', color: menuSelected === 1 ? '#fff' : '#707070' }}>Geral</span>
                        <TbPointFilled style={{ color: menuSelected === 1 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(2)}>
                        <span style={{ fontWeight: menuSelected === 2 ? '700' : '400', color: menuSelected === 2 ? '#fff' : '#707070' }}>Imagens</span>
                        <TbPointFilled style={{ color: menuSelected === 2 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(3)}>
                        <span style={{ fontWeight: menuSelected === 3 ? '700' : '400', color: menuSelected === 3 ? '#fff' : '#707070' }}>Vídeos</span>
                        <TbPointFilled style={{ color: menuSelected === 3 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(4)}>
                        <span style={{ fontWeight: menuSelected === 4 ? '700' : '400', color: menuSelected === 4 ? '#fff' : '#707070' }}>Links</span>
                        <TbPointFilled style={{ color: menuSelected === 4 ? '#CBFB45' : 'transparent' }} />
                    </button>
                </div>
                <form>
                    {menuSelected === 1 &&
                        <>
                            <label>
                                <input placeholder='Título' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Tags' />
                                <GrCircleInformation />
                            </label>
                            <div className={styles.inpuGroup}>
                                <label htmlFor='conteudo'>
                                    <span>Conteúdo Anônimo:</span>
                                    <select id='conteudo'>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Privacidade:</span>
                                    <select>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                            </div>
                            <div className={styles.inpuGroup}>
                                <label htmlFor='conteudo'>
                                    <span>Feed Usuário:</span>
                                    <select id='conteudo'>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Autodestruição:</span>
                                    <select>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                            </div>
                            <div className={styles.inpuGroup}>
                                <label htmlFor='conteudo'>
                                    <span>Tipo de Vínculo:</span>
                                    <select id='conteudo'>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Vínculo:</span>
                                    <select>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                            </div>
                            <div className={styles.inpuGroup}>
                                <label htmlFor='conteudo'>
                                    <span>Cobrança Avulsa:</span>
                                    <select id='conteudo'>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Valor(R$):</span>
                                    <select>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </label>
                            </div>
                            <textarea placeholder='Descrição (500 Caracteres):' />
                        </>
                    }

                    {menuSelected === 2 &&
                        <>
                            <label>
                                <input placeholder='Título:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Tags:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Álbum:' />
                                <GrCircleInformation />
                            </label>
                            <button className={styles.btnLocalIMg}>
                                <FaRegImages />
                                <span>Solte ou clique para realizar o uploads de imagens.</span>
                            </button>
                        </>
                    }

                    {menuSelected === 3 &&
                        <>
                            <label>
                                <input placeholder='Título:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Tags:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Álbum:' />
                                <GrCircleInformation />
                            </label>
                            <button className={styles.btnLocalIMg}>
                                <PiVideoBold />
                                <span>Solte ou clique para realizar o uploads de Videos.</span>
                            </button>
                        </>
                    }

                    {menuSelected === 4 &&
                        <>
                            <label>
                                <input placeholder='Título:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Tags:' />
                                <GrCircleInformation />
                            </label>
                            <label>
                                <input placeholder='Link:' />
                                <GrCircleInformation />
                            </label>
                        </>
                    }
                    <button className={styles.btn_publicar}>
                        <FaPlus />
                        <span>Publicar</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default InserirLocal;