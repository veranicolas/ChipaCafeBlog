
//@ts-nocheck
import React from "react"
import styles from './BlogPost.module.css'
export const BlogPost = ({titulo,lugar,descripcion,conclusion,creado,creadoPor}) => {
  return (
    <div className={styles.blogpost}>
        <h2>{titulo}</h2>
        <h3>Lugar: {lugar}</h3>
        <p>{descripcion}</p>
        <p>Conclusion: {conclusion}</p>
        <p>{creadoPor}, {creado}.</p>
    </div>
  )
}
