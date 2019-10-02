import React from 'react';
import './About.css'

import aboutImg from '../../../assets/Images/AboutUs.jpg'

const about = (props) => {
    return (
        <div className="About">
            <h2>About Us</h2>
            <div className="aboutDown">
               <div className="aboutLeft">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>

              <div className="aboutRight">
                 <img src={aboutImg} alt="About us"/>
              </div>
            </div>
            
        </div>
    
    )
}

export default about