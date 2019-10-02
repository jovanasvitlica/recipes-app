import React from 'react';
import './SingleCategoryMeal.css'


const singlecategorymeal = (props) => {
    return (
        <div className="SingleCategoryMeal">
            
         <img src={props.link} alt="slika"/>
        <h4> {props.mealName}</h4>
        </div>
    
    )
}

export default singlecategorymeal