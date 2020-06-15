import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import MenuLinks from './menuLinks.js'
import Burger from './burger.js'
import HeaderStyles from "./headerStyles.module.css"
import PropTypes from "prop-types";
import {Colors} from '../../../constants/colors';

import home from '../../../images/Home.png';
import { mergeClasses } from '@material-ui/styles';

const Header = props => {

  const [active, setMenu] = useState(false);

  const data = useStaticQuery(graphql`
  query {
    prismic {
      allNavigation_menus {
        edges {
          node {
            body {
              ... on PRISMIC_Navigation_menuBodyMenu_link {
                type
                label
                primary {
                  page_title
                  short_url
                }
              }
              ... on PRISMIC_Navigation_menuBodyLogo {
                type
                label
                primary {
                  logo_imageSharp {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

    const doc = data.prismic.allNavigation_menus.edges.slice(0, 1).pop()
    if (!doc) return null

    const filterMenuLinks = () => {
      return doc.node.body.filter(node => node.type === 'menu_link');
    }


    const toggleActiveMenu = () => {
      active? setMenu(false) : setMenu(true);
    }

    let burgerClass= [HeaderStyles.burgerLinks]
    if (active){
      burgerClass.push(HeaderStyles.activeBurger);
    }
    burgerClass = burgerClass.join(' ')


 return   (
   <div className={HeaderStyles.container}>
            <div className={HeaderStyles.Home} style={{'height': '100%'}}>
              <Link activeStyle={{color: 'white'}} to="/">
                <div className={HeaderStyles.logoContainer}>
                    Home
                </div>
             </Link>
            </div>
              {/* <Link to="/" activeStyle={{color: Colors.primary}}>Home</Link> */}
        <MenuLinks links={filterMenuLinks()}class={HeaderStyles.linksContainer} />
        <MenuLinks links={filterMenuLinks()} class={burgerClass} />
        <Burger onClick={toggleActiveMenu} />
   </div>
    )
}

  export default Header;


Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }