import { BlogPost } from '../BlogPost/BlogPost';
import postData from '../../mockData/mockData.ts';
import { animated, useSpring } from '@react-spring/web'
import styles from './BlogContent.module.css'
import { useEffect } from 'react';

export const BlogContent = () => {
  
  const [springs, api] = useSpring(()=>({
    from:{
      opacity:0
    },
    config:{
      duration:200
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
      {postData.data.map((post) => (
          <BlogPost
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
