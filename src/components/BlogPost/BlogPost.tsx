import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated , useSpring } from '@react-spring/web'

import styles from './BlogPost.module.css'
 
interface BlogPostProps {
  id:number,
  titulo:string,
  lugar:string,
  descripcion:string,
  conclusion:string,
  creado:string,
  creadoPor:string,
  foto:string,
  type:string
}

export const BlogPost = ({id,titulo,lugar,descripcion,conclusion,creado,creadoPor, foto, type}:BlogPostProps) => {

  const blogRef = useRef<null | HTMLDivElement>(null); 
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


  return (   
    <animated.div
    style={{...hoverSpring}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        className={styles.blogpost}
        ref={blogRef}
    >
        <img src={foto} height={190} width={190} style={{borderRadius:6, objectFit:'cover'}}/>
        <div className={styles.blogpostBody}>
          <h2 style={{width:'100%', textAlign:'left', fontWeight:100}}>{titulo}</h2>
          <h3 style={{width:'100%', textAlign:'left'}}>{lugar}</h3>
          <p style={{width:'100%', textAlign:'left', fontFamily:'Open Sans'}}>{descripcion}</p>
          {/* <p style={ expanded ? {display:'block'} : {display:'none'} }>{conclusion}</p> */}
          <p style={{ fontFamily:'Open Sans' }} className={styles.conclusion}>{conclusion}</p>
          <p>{creadoPor}, {creado}.</p>
          <Link to={`/${type}/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>Leer Más</Link>
        </div>
    </animated.div>
  )
}
