import React from 'react'
import './SingleSearchItem.css'

const singleSearchItem = (props) => {
    
    return(
        <div className="SingleSearchItem">
             <img src={props.imgLink} alt="slika"/>
             <p>{props.mealName}</p>

             <p>Category: 
                 <span className="boldItem">{props.category}</span>
            </p>
             <p>Country: 
                 <span className="boldItem">{props.country}</span>
            </p>
        </div>
    );

}

export default singleSearchItem