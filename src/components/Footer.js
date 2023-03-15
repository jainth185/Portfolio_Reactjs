import "./FooterStyles.css"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff',marginRight:"2rem"}}/>
                    <div>
                        <p>2/21 B Muthampalayam</p>
                        <p>Chengapalli</p>
                        <p>Tirupur-638812</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    +91 9360328045</h4>
                </div>
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    jainthasokan185@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I'm an aspiring design thinker who is open to learning 
                new things and exploring myself in the corporate world. 
                I'm an adaptive person who adapts in all situations and places.
                Change is something which helps me grow. </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer