import React from 'react'
import FooterStyles from "./footer.module.css";
import { RichText } from "prismic-reactjs";
import { useStaticQuery, graphql } from "gatsby"



const Footer = () => {

  const data = useStaticQuery(graphql`
  query {
    prismic {
      allFooters {
        edges {
          node {
            contact
          }
        }
      }
    }
  }
  `)

  const doc = data.prismic.allFooters.edges.slice(0, 1).pop()
  if (!doc) return null

  
  return (
  <footer>
    <div className={FooterStyles.container}>
      <hr></hr>
      <div className={FooterStyles.footer}>
        <small className={FooterStyles.madeby}><a href="kylorobinson.codeimagined.com"> made by Kylo Robinson</a> </small>
        <small className={FooterStyles.email}>{RichText.render(doc.node.contact)}</small>
      </div>
      <small className={FooterStyles.attribution}><a href="/attribution"> image attribution</a> </small>
    </div>
  </footer>
  )
}

export default Footer
