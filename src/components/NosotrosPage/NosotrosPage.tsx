import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

import styles from './NosotrosPage.module.css'
import nosotros from './nosotros'

interface IndividuoProps {
  individuo:{
    foto:string,
    nombre:string,
    descripcion:string
  }
}

const IndividuoComponent = ({individuo}:IndividuoProps) =>{

  const { foto, nombre, descripcion } = individuo
  const [isHovered, setHover] = useState(false)

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

  return(
    <animated.div style={{...hoverSpring}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.people}>
        <div className={styles.imageAndName}>
          <img src={foto} height={200} width={200}/>
          <h3 style={{textAlign:'center', fontFamily:'Roboto'}}>{nombre}</h3>
        </div>
      <p className={styles.bio} >{descripcion}</p>
    </animated.div>
  )
}

export const NosotrosPage = () => {
  
  document.title = "Nosotros - CafeChipa MDP"
  
  return (
    <>
     <div className={styles.content}>
        <h2 className={styles.titulo} >Sobre nosotros</h2>
        <div className={styles.peopleCards}>
          <IndividuoComponent individuo={nosotros.vera}/>
          <IndividuoComponent individuo={nosotros.napo}/>
          <IndividuoComponent individuo={nosotros.leo}/>
        </div>
      </div>
    </>
  )
}
