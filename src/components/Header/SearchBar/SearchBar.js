import React from 'react';
import './SearchBar.css'

import { Link } from 'react-router-dom'

import SearchIcon from '../../../assets/Icons/search.png'

const searchbar = (props) => {
    const handleSubmit = event => {     
        event.preventDefault();
      };
    return (
        <div className="Searchbar">
            <form onSubmit={handleSubmit}>
               <input type="text"
                    placeholder="Search recipes"
                    onChange={props.changed} 
                    value={props.value}>

                </input>
                <Link to="/search"
                      onClick={props.searchRoute}>
                <button type="submit"
                     onClick={props.clicked}
               >
                 <img src={SearchIcon} alt='search'/>
                 </button>
                </Link>
              
            </form>
      
        </div>
    
    )
}

export default searchbar