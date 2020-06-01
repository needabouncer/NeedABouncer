import React from 'react'
import HeaderStyles from "./headerStyles.module.css"

const Burger = (props) => {

  function clickHandler(e){
    props.onClick();
  }

 return (
      <div onClick={clickHandler} className={HeaderStyles.burgerContainer}>
        <div className= {HeaderStyles.burgerTop}></div>
        <div className= {HeaderStyles.burgerMiddle}></div>
        <div className= {HeaderStyles.burgerBottom}></div>
      </div>
    )

  }

  export default Burger