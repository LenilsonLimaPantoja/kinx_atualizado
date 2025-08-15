import { useState } from 'react';
import styles from './InserirLocal.module.scss';
import { IoCloseSharp } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";

const InserirLocal = () => {
    const [menuSelected, setMenuSelected] = useState(1);
    return (
        <div className={styles.container_inserir_local}>
            <div className={styles.topo}>
                <span>Inserir <strong>Local</strong></span>
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
                        <span style={{ fontWeight: menuSelected === 2 ? '700' : '400', color: menuSelected === 2 ? '#fff' : '#707070' }}>Mapa</span>
                        <TbPointFilled style={{ color: menuSelected === 2 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(3)}>
                        <span style={{ fontWeight: menuSelected === 3 ? '700' : '400', color: menuSelected === 3 ? '#fff' : '#707070' }}>Horários</span>
                        <TbPointFilled style={{ color: menuSelected === 3 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(4)}>
                        <span style={{ fontWeight: menuSelected === 4 ? '700' : '400', color: menuSelected === 4 ? '#fff' : '#707070' }}>Imagem & Vídeo</span>
                        <TbPointFilled style={{ color: menuSelected === 4 ? '#CBFB45' : 'transparent' }} />
                    </button>
                    <button onClick={() => setMenuSelected(5)}>
                        <span style={{ fontWeight: menuSelected === 5 ? '700' : '400', color: menuSelected === 5 ? '#fff' : '#707070' }}>Links</span>
                        <TbPointFilled style={{ color: menuSelected === 5 ? '#CBFB45' : 'transparent' }} />
                    </button>
                </div>
                <form>
                    <label>
                        <input placeholder='Título' />
                        <GrCircleInformation />
                    </label>
                    <label>
                        <input placeholder='Tags' />
                        <GrCircleInformation />
                    </label>
                </form>
            </div>
        </div>
    )
}
export default InserirLocal;