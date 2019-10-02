import React from 'react'
import './SearchPage.css'
import './Dropdown/Dropdown';
import Dropdown from './Dropdown/Dropdown';
const searchPage = (props) => {

    return(
        <div className="searchPage">
            <div className="titles">
            <h3>Search Results</h3>
            <p>Our recommendation</p>
            </div>
             <div className="Recomendation">
             {props.SearchedArray} 
                 
                
             </div>
             <div ><Dropdown
             
             /></div>
             <hr/>
             <div className="searchedResults">
                 {props.SearchedArray}
             </div>
             
        </div>
    );

}

export default searchPage