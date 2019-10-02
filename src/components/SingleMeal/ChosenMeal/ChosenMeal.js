import React from 'react';
import './ChosenMeal.css'


const chosenmeal = (props) => {
    const ingredients = props.ingredients.map(singleIngredient =>{
        return (<li>{singleIngredient}</li>)
    })

    const mesurments = props.measurments.map(mesurment =>{
        return (<li>{mesurment}</li>)
    })
    return (
        <div className="ChosenMeal">
            <div className="ChosenUpperr">
             <div className="UpperrLeft">
             <h3>
            {props.mealName}
            </h3>
            <img  src ={props.link}alt="meal"/>
             </div>

                <div className="UpperrRight">
                    <p> 
                      <span className="bold">Category:</span> {props.category}</p>
                    <br></br>
                    <p>
                        
                         <span className="bold">Country:</span> {props.country}</p>
                         <br></br>
                    <p>
                         <span className="bold">Video:</span>
                         <a href={props.video} target="blank"> 
                          {props.video} </a></p>
                    <p className="instruction">{props.description}</p>
                </div>

            </div>

            <div className='ChosenDown'>
                <div className="ingredients">
                 <p>Ingridients</p>
                <ul> 
                        {ingredients}
     
                     </ul>
                    
                </div>
                <div className="measure">
                 <p>Measure</p>
                    
                    <ul>
                     {mesurments}
                        
                    </ul>
                </div>
            </div>
            
        </div>
    
    )
}

export default chosenmeal