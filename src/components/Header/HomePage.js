import React from 'react';
import './HomePage.css'

import About from '../Main/AboutUs/About'
import Contact from '../Main/Contact/Contact'

import headerImg from '../../assets/Images/HeaderImg.png'

const Homepage = (props) => {
    
        return (
        <div className="homepage">          
        <div className="main">
        <div className="up">
        <div className="left">
        <h3>Food recipes</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="/#Categories">Categories </a>
                                
        </div>

                            <div className="right">
                            <img src = {headerImg} alt="Header"/>
                            </div>
                            </div>

                        <div className='down' id="Categories">
                            {props.categoriesList}
                         </div>
                         </div>
                   <div id="About">
                    <About />
                   </div>
                
                   <div id="Contact">
                   <Contact/>
                    </div>
                     
                     </div>
        
        )
    
    
}

export default Homepage;