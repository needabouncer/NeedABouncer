import React from 'react'
import { Link } from 'gatsby'

const MenuLinks = (props) => {

 return   (
      <div className={props.class}>
        <ul>
            <li> <Link
            to="/services/"
            activeStyle={{
                color: "red",
            }}
            > services
            </Link>
            </li>
            <li> 
                <Link
                    to="/training/"
                    activeStyle={{
                    color: "red",
                    }}
                    > training
                </Link>
            </li>
            <li>
                <Link
                    to="/about/"
                    activeStyle={{
                        color: "red",
                    }}> about
                </Link>
            </li>
            <li>
                <Link
                    to="/contact/"
                    activeStyle={{
                    color: "red",
                    }}> contact
                </Link>
            </li>
        </ul>
     </div>
    )

  }

  export default MenuLinks