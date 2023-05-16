import { useState } from 'react';
import { useTransition, animated, useSpring } from '@react-spring/web';

import styles from './Index.module.css'
import fotos from './fotos';


const Carrousel = () =>{

    const [index, setIndex] = useState(0)
    const [isHovered, setHover] = useState(false)
    const transitions = useTransition(index,{
        key: index,
        from:{ opacity: 0,  },
        enter: { opacity: 1},
        leave: { opacity: 0},
        config:{
          duration: 400  
        },
        exitBeforeEnter:true
    })

    const hoverSpring = useSpring({
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        config:{
            duration:300
        }
    })

    const handleMouseEnter = () =>{
        setHover(true)
    }
    
    const handleMouseLeave = () =>{
        setHover(false)
    }

    const handleTransition = () =>{
        if (index !== fotos.length-1) {
            setIndex(state => (state + 1) % fotos.length)
        } else {
            setIndex(0)
        }
    }

    return transitions((style, index)=>(
        <div className={styles.carrouselContainer}>
            <animated.div
                onClick={handleTransition}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...style,
                    ...hoverSpring,
                    backgroundImage: `url(${fotos[index].foto})`,
                    width:'100%',
                    height:'100%',
                    backgroundSize:'cover',
                    cursor:'pointer'
                }}
             />
        </div>
    ))
}

const Index = () => {

    document.title = "CafeChipa MDP"

    return (
        <div className={styles.indexContainer}>
            <Carrousel />
            <div className={styles.textoIntroductorio}>
                <h2>Bienvenidos a CafeChipa MDP!</h2>
                <p>Bienvenidos a nuestro blog, donde exploraremos el delicioso mundo de dos grandes placeres gastronómicos: la chipa y el café. Estos dos elementos son más que simples alimentos, representan una parte importante de nuestras tradiciones y cultura en diferentes partes del mundo.<br/><br/> Desde las suaves y aromáticas tazas de café hasta el sabor único y reconfortante de la chipa, nos sumergiremos en un viaje lleno de sabores, aromas y experiencias culinarias que deleitarán nuestros sentidos.
                </p>
                {/* En cada publicación, descubriremos los secretos detrás de estas delicias, explorando su historia, origen y técnicas de preparación. Aprenderemos sobre los diferentes tipos de granos de café, desde los sutiles y afrutados hasta los intensos y terrosos, y exploraremos las múltiples formas en que se puede disfrutar esta maravillosa bebida, desde un café expreso perfectamente preparado hasta una taza de café con leche adornada con hermosas figuras de arte latte.

                No podemos dejar de lado la chipa, esa pequeña joya culinaria que nos cautiva con su sabor y textura. Descubriremos los ingredientes tradicionales utilizados en su preparación, las diversas formas en que se puede disfrutar, ya sea rellena con queso, jamón o incluso dulce. Exploraremos las recetas clásicas y también daremos un toque moderno a esta delicia, experimentando con nuevos sabores y combinaciones.

                Así que prepárate para sumergirte en el mundo del café y la chipa, donde cada bocado y sorbo nos llevará a través de una experiencia gastronómica única. Desde los cafés más emblemáticos hasta las chipas más exquisitas, te invitamos a acompañarnos en este emocionante viaje culinario que despertará tus sentidos y te dejará con ganas de más. ¡Bienvenidos al maravilloso mundo del café y la chipa! */}
            </div>
        </div>
    );
};

export default Index;