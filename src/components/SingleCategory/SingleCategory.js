import React from 'react';
import './SingleCategory.css';
import '../Header/SearchBar/SearchBar.css'

import SearchIcon from '../../assets/Icons/search.png'

const SingleCategory = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };    
        return(
            <div className="SingleCategory">

            <div className="flexcontainer">
            <div className="FeaturedMeal">
            <h3>{props.categoryName}</h3>
            <p className="recomendationText">Our recomendation</p>
                    
             <div className="recomendation">{props.meals[0]}</div> 
            </div>

            <div className="Searchbar" id='searchBar'>
                    <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Search recipes"
                        >

                        </input>
                    <button type="submit"

    >
             <img src={SearchIcon} alt='search'/>
             </button>
             </form>
             </div>
             </div>
                
                
                <hr/>
                <div className="allMeals">
                       {props.meals} 
                </div>
                
            
                
            </div>
        )

    }
        
    

export default SingleCategory