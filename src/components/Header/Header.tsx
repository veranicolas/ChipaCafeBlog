import styles from './Header.module.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const HamburguerMenu = () =>{

    return(
        <div className={styles.hamburguerMenu}>
            <FontAwesomeIcon icon={faBars} size="2xl"/>
        </div>
    )
}

const Header = () => {

    const [isVisible, setVisible] = useState(window.innerWidth >= 768 ? true : false)

    // Esto lo que hace es agregar un evento en el dom, que cuando la pantalla cambia de tamaño a mas chico que 480 que se oculte la navbar, y que si es mas grande que eso que la muestre. 
    useEffect(()=>{
        
        const setNavbarVisible = () =>{
            if(window.innerWidth <= 767) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }

        window.addEventListener('resize', setNavbarVisible)

        // Al final retorna el removeEventListener porque eso es una buena practica para cuando se termina el ciclo del componente
        return ()=>{
            window.removeEventListener('resize',setNavbarVisible)
        }
    }, [])

    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <Link style={{textDecoration:'none', color:'black'}} to="/">CafeChipa MDP</Link>
            </div>
            {
                isVisible ? <Navbar /> : <HamburguerMenu />
            }
        </div>
    );
};

export default Header;