//@ts-nocheck
import postData from '../../mockData/mockData.ts';
import { BlogPost } from '../BlogPost/BlogPost';
import React from 'react';

export const BlogContent = () => {
  return (
    <div>
        {postData.data.map((post) => (
            <BlogPost
                key={post.id}
                titulo={post.attributes.titulo}
                lugar={post.attributes.lugar}
                descripcion={post.attributes.descripcion}
                conclusion={post.attributesconclusion}

            />
        ))}
    </div>
  )
}
