import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.css'
import Navbar from './Navbar';

const MobileNavbarMenu = ({isOpen, handleMenu}:any) =>{

    const displayAnimation = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        config: { duration: 500 }
    });

    const hideAnimation = useSpring({
        opacity: 0, 
        from: { opacity: 1 }, 
        config: { duration: 500 }
    });

    return(
        <animated.div style={isOpen ? {...displayAnimation} : {...hideAnimation}} className={styles.mobileNavbar}>
            <div className={styles.mobileNavbarMenu}>
                <FontAwesomeIcon icon={faXmark} style={{color: "#f3f4f7",}} size='2xl' onClick={handleMenu}/>
                <div onClick={handleMenu}>
                    <Navbar />
                </div>
            </div>
        </animated.div>
    )
}

const HamburguerMenu = ({handleMenu}:any) =>{

    return(
        <div className={styles.hamburguerMenu}>
            <FontAwesomeIcon icon={faBars} size="2xl" onClick={handleMenu}/>
        </div>
    )
}

const Header = () => {

    const [isVisible, setVisible] = useState(window.innerWidth >= 768 ? true : false)
    const [isOpen, setOpenMenu] = useState(false)

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

    const handleMenu = () =>{
        setOpenMenu(!isOpen)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <Link style={{textDecoration:'none', color:'black'}} to="/">CafeChipa MDP</Link>
            </div>
            {
                isVisible ? <Navbar /> : <HamburguerMenu handleMenu={handleMenu}/>
            }
            {
                isOpen ? <MobileNavbarMenu isOpen={isOpen} handleMenu={handleMenu} /> : null
            }
        </div>
    );
};

export default Header;