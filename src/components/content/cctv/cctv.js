import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import classes from './cctvStyles.module.css';


const CCTV = props => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cctv.svg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
        extension
        publicURL
      }
    }
  `)

  console.log('Image data')
  console.log(data)

  return (
    <div className={classes.CCTV}>
        <img src={data.placeholderImage.publicURL} alt="CCTV image" />
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
    </div>
  )
}

export default CCTV;

