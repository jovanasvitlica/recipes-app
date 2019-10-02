import React from 'react';
import './Menu.css'
import avatarIcon from '../../../assets/Icons/avatar-icon.png'

import { Link } from 'react-router-dom'

const menu = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };
    return (
        <div className="Menu">
         
         <img src={avatarIcon} alt="avatar" onClick={props.avatarClicked}
            style={{
            display: props.isLogged || !props.atHome ? 'none' :'block'
         }}/>
            
        
         <Link to="/" className="link"
            onClick={props.homeClicked}
            style={{
            display: props.atHome ? 'none' :
            'block'
            }}> Home</Link>
            
            <a href="/#About">About Us</a>
            
            <a href="/#Contact">Contact</a>

            <Link to="/myMeals" 
                className="link"
                onClick={props.myMealsClick}style={{
                display: props.isLogged ? 'block':'none'
            }}>My Meals</Link>
            
            <p 
            onClick={props.logOut}
            style={{
                display: props.isLogged ? 'block' :
                'none'
            }}>Log out</p>
 
            <div className="frame"
                 style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:props.show ? '1' : '0'
            }}>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email"
                    onChange={props.changedMail} 
                    value={props.valueMail} />
                    <input type="password" placeholder="Password"
                    onChange={props.changedPw} 
                    value={props.valuePw} />
                    <button type="submit"
                    onClick={props.clicked}
                     >Login</button>
                </form>
                </div>
              </div>
    
    )
}

export default menu;