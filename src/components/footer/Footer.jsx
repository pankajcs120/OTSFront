import React from 'react'
import "./Footer.scss"


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span> Flats</span>
            
            <span>Houses</span>
            <span>PG's</span>
            
            
          </div>
          <div className="item">
            <h2>About</h2>
            
            <span>Privacy Policy</span>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
           
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer feedback</span>
           
          </div>
          <div className="item">
            
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>OTS</h2>
            <span>© OTS International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="../../../public/img/twitter.png" alt="" />
              <img src="../../../public/img/facebook.png" alt="" />
              <img src="../../../public/img/linkedin.png" alt="" />
              <img src="../../../public/img/pinterest.png" alt="" />
              <img src="../../../public/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="../../../public/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
             
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer