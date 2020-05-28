import React from "react";
import Styles from './Embed.module.css';

const Embed = ({ slice }) => {
    if(slice){   	
        return (
            <div className="content">
                <div className={Styles.Embed_container} dangerouslySetInnerHTML={{ __html: slice.primary.embed_link.html }} />
            </div>
        );
    } else {
      return null;
    }
}

export default Embed