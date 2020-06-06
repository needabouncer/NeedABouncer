import React from "react";
import AccordionDropdown from '../../content/accordion/accordionDropdown';
import classes from './AccordionStyles.module.css';

const Accordion = ({ slice }) => {

    if(slice){ 
        
        return (
            <ul className={classes.AccordionContainer}>
                <AccordionDropdown title={slice.primary.heading[0].text} content={slice.primary.content} />
            </ul>
        )
        
    } else {

      return null;

    }
}

export default Accordion