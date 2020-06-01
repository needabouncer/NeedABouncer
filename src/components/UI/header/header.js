import React from 'react'
import { Link } from 'gatsby'
import MenuLinks from './menuLinks.js'
import Burger from './burger.js'
import HeaderStyles from "./headerStyles.module.css"
import PropTypes from "prop-types"
// import logo from './logo.png'

class Header extends React.Component{

  state = {
    'activeMenu': false
  }

  toggleActiveMenu = () => {
    this.state.activeMenu ? this.setState({'activeMenu': false}) : this.setState({'activeMenu': true});
  }

  render(){

    let burgerClass= [HeaderStyles.burgerLinks]
    if (this.state.activeMenu){
      burgerClass.push(HeaderStyles.activeBurger);
    }
    burgerClass = burgerClass.join(' ')


 return   (
   <div className={HeaderStyles.container}>
        <div className={HeaderStyles.logoContainer}>
            {/* <Link to="/"><img alt="mbrfilms logo" src={logo} /></Link> */}
            {/* <Link to="/">{this.props.siteTitle}</Link> */}
        </div>
        <MenuLinks class={HeaderStyles.linksContainer} />
        <MenuLinks class={burgerClass} />
        <Burger onClick={this.toggleActiveMenu} />
   </div>
    )
  }
}

  export default Header;


Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }