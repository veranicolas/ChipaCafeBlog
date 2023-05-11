import styles from './Header.module.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <Link style={{textDecoration:'none', color:'black'}} to="/">CafeChipa MDP</Link>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;