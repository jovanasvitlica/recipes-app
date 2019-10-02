import React from 'react';

import logo from '../../assets/Images/Logo.png'; 
import fb from '../../assets/Icons/FB.png'; 
import insta from '../../assets/Icons/INSTA.png'; 

import './Footer.css'

const footer = (props) => {
    return (
        <div className="Footer">
            <div className="UpperPart">
                         
               <img src={logo} alt="Logo" className="logo"/>
               <div className="Links">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="FB"/></a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Insta"/></a>
               </div>
            </div>
            <p>Copyright - Golux Technologies 2019 - Jovana Svitlica</p>
            
        </div>
    
    )
}

export default footer