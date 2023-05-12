import { useState } from 'react'
import styles from './BlogPost.module.css'
import { Link } from 'react-router-dom'
import { animated , useSpring } from '@react-spring/web'
 
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
        height:400
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
        duration:100,
      }
    })
    setTimeout(()=>{
      setExpanded(false)
    },100);
  }

  const [conclusionAnimation,apiConclusion] = useSpring(()=>({
    from:{opacity:0}
  }))

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
          <h2 style={{width:'100%', textAlign:'left'}}>{titulo}</h2>
          <h3 style={{width:'100%', textAlign:'left'}}>{lugar}</h3>
          <p >{descripcion}</p>
          {/* <p style={ expanded ? {display:'block'} : {display:'none'} }>{conclusion}</p> */}
          <animated.p style={{...conclusionAnimation }} className={expanded ? styles.display : styles.notDisplay}>{conclusion}</animated.p>
          <p>{creadoPor}, {creado}.</p>
          <Link to={`/post/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>Leer Más</Link>
        </div>
    </animated.div>
  
  )
}
