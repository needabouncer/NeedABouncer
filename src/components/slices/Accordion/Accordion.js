import React from "react";
import AccordionDropdown from '../../content/accordion/accordionDropdown';
import classes from './AccordionStyles.module.css';

const Accordion = ({ slice }) => {
    if(slice){ 

        const accordions = slice.map((slice, i) => {
            return <AccordionDropdown key={i} title={slice.title1[0].text} content={slice.content} />
        })
        
        return (
            <ul className={classes.AccordionContainer}>
                {accordions}
            </ul>
        )
        
    } else {

      return null;

    }
}

export default Accordion