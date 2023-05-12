import { Link, useParams } from "react-router-dom";
import postData from '../../mockData/mockData';
import styles from './PostPage.module.css';


export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id!,10);
  const post = postData.data.find((post) => post.id === postId);
  console.log(post);

  if (!post) {
    return <div>Post no encontrado!</div>;
  }

  return (
    <div className={styles.postContainer}>
      <img src={post.attributes.foto} height={300} width={750} style={{objectFit:'cover', borderRadius:8}}/>
      <i className={styles.creadoFecha}>{post?.attributes.creado}</i>
      <h1 className={styles.title}>{post?.attributes.titulo}</h1>
      <h2 className={styles.lugar}>{post?.attributes.lugar}</h2>
      <p className={styles.postBody}>{post?.attributes.descripcion}</p>
      <p className={styles.conclusion}>{post?.attributes.conclusion}</p>
      <div className={styles.pieDePost}>
      <h3 className={styles.creadoPor}>Autor: {post?.attributes.creadoPor}</h3>
      <Link className={styles.linkAtras} to={'/cafe'}>--- Volver a Posts ---</Link>
      </div>
    </div>
  )
}
