import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import styles from './DrawerFormulario.module.scss'
import { useState } from 'react';
import TelaLogin from './TelaLogin';
import TelaEncontrarConta from './TelaEncontrarConta';
import TelaEscolherContato from './TelaEscolherContato';
import TelaCodigo from './TelaCodigo';
import TelaNovaSenha from './TelaNovaSenha';
import TelaSucesso from './TelaSucesso';

const DrawerFormulario = ({ isOpenClose, setIsOpenClose }) => {
    const [etapa, setEtapa] = useState(1);
    const toggleDrawer = () => {
        setIsOpenClose((prevState) => !prevState);
    }

    return (
        <>
            <Drawer
                open={isOpenClose}
                duration={200}
                onClose={toggleDrawer}
                direction='right'
                className={styles.container_login}
                style={{ width: '100%', maxWidth: 570, backgroundColor: 'transparent' }}
            >
                <div className={styles.area_drawer}>
                    <div className={styles.area_login}>
                        {etapa === 1 && <TelaLogin toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                        {etapa === 2 && <TelaEncontrarConta toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                        {etapa === 3 && <TelaEscolherContato toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                        {etapa === 4 && <TelaCodigo toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                        {etapa === 5 && <TelaNovaSenha toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                        {etapa === 6 && <TelaSucesso toggleDrawer={toggleDrawer} setEtapa={setEtapa} />}
                    </div>
                </div>
            </Drawer >
        </>
    )
}

export default DrawerFormulario;