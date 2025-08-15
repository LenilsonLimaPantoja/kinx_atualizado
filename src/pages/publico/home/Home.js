import { useEffect, useState } from 'react';
import Darkroons from './components/Darkroons';
import HeaderHome from './components/HeaderHome';
import styles from './Home.module.scss';
import LoadingSpin from '../../../components/LoadingSpin';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }
    useEffect(() => {
        handleLoading();
    }, []);

    return (
        <>
            {loading && <LoadingSpin />}
            <div className={styles.container_home}>
                <HeaderHome icone={true} titulo="Darkrooms de " tituloBold="São Paulo - SP" paragrafo="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição." />
                <Darkroons />
            </div>
        </>
    )
}
export default Home;