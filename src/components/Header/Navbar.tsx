import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarComponent}>
            <div className={styles.customLink}>
                <Link to="/cafe">Cafe</Link>
            </div>
            <div className={styles.customLink}>
                <Link to="/chipa">Chipa</Link>
            </div>
            <div className={styles.customLink}>
                <Link to="/nosotros">Nosotros</Link>
            </div>
        </div>
    )
}


export default Navbar;