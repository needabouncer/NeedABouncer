import React from "react";
import { linkResolver } from '../../../utils/linkResolver';
import { RichText } from 'prismic-reactjs';

const Text = ({ slice }) => {
    if(slice){   	
        return (
            <div className="content">
                {RichText.render(slice.primary.content, linkResolver)} 
            </div>
        );
    } else {
      return null;
    }
}

export default Text