import React from 'react'
import { Link } from 'gatsby'
import { Colors } from '../../../constants/colors';

const MenuLinks = (props) => {

 return   (
      <div className={props.class}>
        <ul>
            {props.links.map(menuItem => <li> <Link to={menuItem.primary.short_url} activeStyle={{color: Colors.secondary}}> {menuItem.primary.page_title[0].text} </Link></li>)}
        </ul>
     </div>
    )

  }

  export default MenuLinks