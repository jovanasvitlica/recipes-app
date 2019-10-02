import React from 'react';
import './SingleMeal.css';

const SingleMeal =(props) => {

        return(
            <div className="SingleMeal">
                {props.MealDetails}
                <div className="similarMeals"> 
                    <h3>Similar meals</h3>
                    <div className="similar">
                    {props.meals[0]}
                    {props.meals[1]}
                    {props.meals[2]}
                    </div>
                </div>
            </div>
            
        )
    }

export default SingleMeal