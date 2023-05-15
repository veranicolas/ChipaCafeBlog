import { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web'

import { BlogPost } from '../BlogPost/BlogPost';

import styles from './BlogContent.module.css'

export const BlogContent = ({postData, type}:any) => {
  
  const [springs, api] = useSpring(()=>({
    from:{
      opacity:0
    }
  }))

  useEffect(()=>{
    api.start({
      from:{
        opacity:0
      },
      to:{
        opacity:1
      }
    })
  },[])
  
  return (
    <animated.div 
      style={{
        ...springs
      }}
      className={styles.blogpostContainer}>
      {postData.data.map((post:any) => (
          <BlogPost
            type={type}
            key={post.id}
            id={post.id}
            titulo={post.attributes.titulo}
            lugar={post.attributes.lugar}
            descripcion={post.attributes.descripcion}
            conclusion={post.attributes.conclusion}
            creado={post.attributes.creado}
            creadoPor={post.attributes.creadoPor}
            foto={post.attributes.foto}
          />
          
      ))}
    </animated.div>
  )
}
