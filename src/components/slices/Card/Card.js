import React from "react";
import InfoCard from '../../content/infoCard/infoCard';
import classes from './CardsContainer.module.css'

const Card = ({ slice }) => {

    if(slice){ 
      const cards = slice.map((card, i) => {
        return <InfoCard key={i} image={card.image.url} link={card.link.url} title={card.title1[0].text} text={card.card_text[0].text} ></InfoCard>
      })
        
        return (
          <ul className={classes.CardsContainer}>
            {cards}
          </ul>
        )
        
        
    } else {

      return null;

    }
}

export default Card