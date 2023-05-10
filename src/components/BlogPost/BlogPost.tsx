
//@ts-nocheck
import React from "react"
import styles from './BlogPost.module.css'
export const BlogPost = ({titulo,lugar,descripcion,conclusion,creado,creadoPor, foto}) => {
  return (
    <div className={styles.blogpost}>
        <img src={foto} height={190} width={190}/>
        <div className={styles.blogpostBody}>
          <h2>{titulo}</h2>
          <h3>Lugar: {lugar}</h3>
          <p style={{padding: '0 20px'}}>{descripcion}</p>
          <p className={styles.conclusion}>Conclusion: {conclusion}</p>
          <p>{creadoPor}, {creado}.</p>
        </div>
    </div>
  )
}
