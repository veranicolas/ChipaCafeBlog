import { useParams } from "react-router-dom";

import mockChipaData from "../../mockData/mockChipaData";
import mockCafeData from "../../mockData/mockCafeData";

import styles from './PostPage.module.css';

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id!,10);
  let post;

  const chipaRegex = new RegExp('chipa')

  if(chipaRegex.test(window.location.pathname)){
    post = mockChipaData.data.find((post) => post.id === postId);
  } else {
    post = mockCafeData.data.find((post)=> post.id === postId);
  }

  if (!post) {
    return <div>Post no encontrado!</div>;
  }

  const handleBackToPosts = () =>{
    history.back()
  }

  return (
    <div className={styles.postContainer}>
      <img src={post.attributes.foto} style={{width:'100%', height:'250px',objectFit:'cover', borderRadius:8}}/>
      
      <h1 className={styles.title}>{post?.attributes.titulo}</h1>
      <h2 className={styles.lugar}>{post?.attributes.lugar}</h2>
      <p className={styles.postBody}>{post?.attributes.descripcion}</p>
      <p className={styles.conclusion}>{post?.attributes.conclusion}</p>
      <div className={styles.pieDePost}>
      <h3 className={styles.creadoPor}>
        {post?.attributes.creadoPor}, 
        <i className={styles.creadoFecha}> {post?.attributes.creado}</i>
      </h3>
      <div onClick={handleBackToPosts} className={styles.linkAtras}>--- Volver a Posts ---</div>
      </div>
    </div>
  )
}
