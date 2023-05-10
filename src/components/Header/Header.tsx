import styles from './Header.module.css'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
              CafeChipa MDP
            </div>
            <Navbar />
        </div>
    );
};

export default Header;