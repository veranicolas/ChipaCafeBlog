import { Link } from "react-router-dom";

export const PostPage = () => {
  return (
    <div>
      PostPage - 
      <Link to={'/cafe'}>Volver a Posts</Link>
    </div>
  )
}
