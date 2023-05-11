import { useState } from 'react'
import styles from './BlogPost.module.css'

import { animated , useSpring } from '@react-spring/web'

interface BlogPostProps {
  titulo:string,
  lugar:string,
  descripcion:string,
  conclusion:string,
  creado:string,
  creadoPor:string,
  foto:string,
}

export const BlogPost = ({titulo,lugar,descripcion,conclusion,creado,creadoPor, foto}:BlogPostProps) => {

  const [expanded, setExpanded] = useState(false)
  
  const [springs, api] = useSpring(()=>({
    from:{
      height: 200
    }
  }))

  const handleMouseEnter = () =>{
    api.start({
      from:{
        height:200
      },
      to:{
        height:400
      }
    })

    setExpanded(true)
  }

  const handleMouseLeave = ()=>{
    api.start({
      from:{
        height:400
      },
      to:{
        height:200
      }
    })

    setExpanded(false)
  }
  
  return (
    <animated.div
        style={
          {
            ...springs
          }}
        className={styles.blogpost}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <img src={foto} height={190} width={190} style={{borderRadius:6, objectFit:'cover'}}/>
        <div className={styles.blogpostBody}>
          <h2>{titulo}</h2>
          <h3>Lugar: {lugar}</h3>
          <p >{descripcion}</p>
          <p style={ expanded ? {display:'block'} : {display:'none'}}>{conclusion}</p>
          <p>{creadoPor}, {creado}.</p>
        </div>
    </animated.div>
  )
}
