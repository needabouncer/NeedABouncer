import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
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

  return (
    <div className={classes.CCTV}>
        <img src={data.placeholderImage.publicURL} alt="CCTV" />
    </div>
  )
}

export default CCTV;

