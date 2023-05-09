
//@ts-nocheck
import React from "react"

export const BlogPost = ({titulo,lugar,descripcion,conclusion}) => {
  return (
    <div>
        <h2>{titulo}</h2>
        <h3>Lugar: {lugar}</h3>
        <p>{descripcion}</p>
        <p>Conclusion: {conclusion}</p>
    </div>
  )
}
