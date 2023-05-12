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
      
      <i className={styles.creadoFecha}>{post?.attributes.creado}</i>
      <h1 className={styles.title}>{post?.attributes.titulo}</h1>
      <h2>{post?.attributes.lugar}</h2>
      <p className={styles.postBody}>{post?.attributes.descripcion}</p>
      <p className={styles.conclusion}>{post?.attributes.conclusion}</p>
      <h3>Autor: {post?.attributes.creadoPor}</h3>
      <Link to={'/cafe'}>---Volver a Posts---</Link>
    </div>
  )
}
