import styles from './Header.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbarComponent}>
            <div className={styles.customLink}>
                <a href="/cafe">Cafe</a>
            </div>
            <div className={styles.customLink}>
                <a href="/chipa">Chipa</a>
            </div>
            <div className={styles.customLink}>
                <a href="/nosotros">Nosotros</a>
            </div>
        </div>
    )
}


export default Navbar;