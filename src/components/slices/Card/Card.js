import React from "react";
import InfoCard from '../../content/infoCard/infoCard';

const Card = ({ slice }) => {

    if(slice){ 
        
        return <InfoCard image={slice.primary.image.url} title={slice.primary.title1[0].text} text={slice.primary.card_text[0].text} ></InfoCard>
        
    } else {

      return null;

    }
}

export default Card