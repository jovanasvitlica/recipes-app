import React from 'react';
import './Category.css'


const category = (props) => {
    return (
        <div className="Category">
            <div><img src={props.imgLink} alt="category"/></div>
            <div><p>{props.categoryName}</p></div>
       
        </div>
    
    )
}

export default category