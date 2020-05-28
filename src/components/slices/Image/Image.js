import React from "react";
import Img from "gatsby-image"

const Image = ({ slice }) => {
    if(slice){  
        console.log(slice.primary.uploaded_imageSharp)	
        return (
            <div className="content">
                {!slice.primary.use_dimensions? 
                    <Img fixed={slice.primary.uploaded_imageSharp.childImageSharp.fixed} />
                    :
                    <Img fluid={slice.primary.uploaded_imageSharp.childImageSharp.fluid} /> 
                }

            </div>
        )
    } else {
      return null;
    }
}

export default Image