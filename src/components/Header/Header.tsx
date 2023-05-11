import styles from './Header.module.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <a style={{textDecoration:'none', color:'black'}} href="/">CafeChipa MDP</a>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;