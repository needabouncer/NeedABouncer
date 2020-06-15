import React from 'react'
import HeaderStyles from "./headerStyles.module.css"

const Burger = (props) => {

  function clickHandler(e){
    e.preventDefault();
    props.onClick();
  }

 return (
      <a onClick={clickHandler} href="#" className={HeaderStyles.burgerContainer}>
        <div className= {HeaderStyles.burgerTop}></div>
        <div className= {HeaderStyles.burgerMiddle}></div>
        <div className= {HeaderStyles.burgerBottom}></div>
      </a>
    )

  }

  export default Burger