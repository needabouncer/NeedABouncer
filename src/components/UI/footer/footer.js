import React from 'react'
import FooterStyles from "./footer.module.css";


const Footer = () => (
  <footer>
    <div className={FooterStyles.container}>
      <hr></hr>
      <div className={FooterStyles.footer}>
        <p className={FooterStyles.madeby}><a href="portfolio.thinktraincreate.com"> made by Kylo Robinson</a> </p>
        <p className={FooterStyles.email}>Contact me at <a href="mailto:matt@mbrfilms.com"> Abraham@something.com </a></p>
      </div>
    </div>
  </footer>
)

export default Footer
