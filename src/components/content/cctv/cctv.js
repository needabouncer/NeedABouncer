import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import classes from './cctvStyles.module.css';


const CCTV = props => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cctv.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.CCTV}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default CCTV;

