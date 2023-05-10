//@ts-nocheck
import React from 'react';

import { BlogPost } from '../BlogPost/BlogPost';
import postData from '../../mockData/mockData.ts';

import styles from './BlogContent.module.css'

export const BlogContent = () => {
  return (
    <div className={styles.blogpostContainer}>
        {postData.data.map((post) => (
            <BlogPost
                key={post.id}
                titulo={post.attributes.titulo}
                lugar={post.attributes.lugar}
                descripcion={post.attributes.descripcion}
                conclusion={post.attributes.conclusion}
                creado={post.attributes.creado}
                creadoPor={post.attributes.creadoPor}
                foto={post.attributes.foto}
            />
        ))}
    </div>
  )
}
