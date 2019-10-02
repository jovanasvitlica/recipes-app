import React from 'react'
import './MyMeals.css'


const myMeals = (props) =>{

        return(
            <div className="myMeals">
                  <h3>My Meals</h3>   
                  <div className="MyMealsRandom">
                        {props.randomMeal1}
                        {props.randomMeal2}
                        {props.randomMeal3}
                   </div>   
            </div>
        );
    }
  
       
  


export default myMeals;