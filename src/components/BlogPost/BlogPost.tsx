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
}

export const BlogPost = ({id,titulo,lugar,descripcion,conclusion,creado,creadoPor, foto}:BlogPostProps) => {

  const blogRef = useRef<null | HTMLDivElement>(null); 
  const [expanded, setExpanded] = useState(false)
  const [springs, api] = useSpring(()=>({
    from:{
      height: 200
    }
  }))
  const [conclusionAnimation,apiConclusion] = useSpring(()=>({
    from:{
      opacity:0
    }
  }))

  const handleMouseEnter = () =>{
    api.start({
      from:{
        height:200
      },
      to:{
        height:500
      }
    })
    apiConclusion.start({
      from:{
        opacity:0,
      },
      to:{
        opacity:1,
      },
      config: {
        duration:500,
      }
    })

    setExpanded(true)
  }

  const handleMouseLeave = ()=>{
    api.start({
      from:{
        height:500
      },
      to:{
        height:200,
      }
    })
    apiConclusion.start({
      from:{
        opacity:1,
      },
      to:{
        opacity:0,
      },
      config: {
        duration:200,
      }
    })
    setTimeout(()=>{
      setExpanded(false)
    },200);
  }

  return (   
    <animated.div
        style={{...springs}}
        className={styles.blogpost}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={blogRef}
    >
        <img src={foto} height={190} width={190} style={{borderRadius:6, objectFit:'cover'}}/>
        <div className={styles.blogpostBody}>
          <h2 style={{width:'100%', textAlign:'left', fontWeight:100}}>{titulo}</h2>
          <h3 style={{width:'100%', textAlign:'left'}}>{lugar}</h3>
          <p style={{width:'100%', textAlign:'left', fontFamily:'Open Sans'}}>{descripcion}</p>
          {/* <p style={ expanded ? {display:'block'} : {display:'none'} }>{conclusion}</p> */}
          <animated.p style={{...conclusionAnimation, fontFamily:'Open Sans' }} className={expanded ? styles.display : styles.notDisplay}>{conclusion}</animated.p>
          <p>{creadoPor}, {creado}.</p>
          <Link to={`/post/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>Leer Más</Link>
        </div>
    </animated.div>
  )
}
