import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { RichText } from "prismic-reactjs";
import BlogPosts from '../components/blogPosts';
import Typography from '@material-ui/core/Typography';


export default ({ data }) => {
  const doc = data.prismic.allAbout_pages.edges.slice(0, 1).pop();
  const posts = data.prismic.allPages.edges;

  if (!doc) return null
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {/* <h1>{doc.node.title[0].text}</h1> */}
        <Typography variant="h1" component="h2" gutterBottom>
          {RichText.asText(doc.node.title)}
        </Typography>
        
        {RichText.render(doc.node.text)}
        {/* <h1>{RichText.asText(doc.node.headline)}</h1>
        <p>{RichText.asText(doc.node.description)}</p> */}
      </div>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export const query = graphql`query MyQuery {
  prismic {
    allPages {
      edges {
        node {
          title
          page_banner
          text
          _linkType
          _meta {
            uid
            id
            type
          }
        }
      }
    }
    allAbout_pages {
      edges {
        node {
          title
          text
          _linkType
          _meta {
            uid
            type
            id
          }
        }
      }
    }
  }
}
`