import React from "react";
import { Link } from 'gatsby';
import { RichText } from "prismic-reactjs";
import { linkResolver } from '../utils/linkResolver';

const BlogPosts = ({ posts }) => {
    if (!posts) return null
    return (
      <div>
        {posts.map(post => {
          return (
            <div key={post.node._meta.id}>
              {/* <h2>{RichText.asText(post.node.title)}</h2> */}
              <Link to={linkResolver(post.node._meta)}>
                {RichText.asText(post.node.title)}
              </Link>
              {/* {RichText.render(post.node.text)} */}
            </div>
          )
        })}
      </div>
    )
  }

  export default BlogPosts;