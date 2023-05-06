
import styles from './Header.module.css'

// puse a estos dos componentes juntos por ahora porque ocupan el mismo archivo de
// css y alta paja ir cambiando entre los dos. Cuando esten masomenos hechos los
// separo en sus propios archivos

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="#">Cafe</a>
            <a href="#">Chipa</a>
            <a href="#">Sobre Nosotros</a>
        </div>
    )
}

const Header = () => {
    return (
        <div className={styles.app}>
            <h1>ChipaCafe MDP</h1>
           
        </div>
    );
};

export default Header;