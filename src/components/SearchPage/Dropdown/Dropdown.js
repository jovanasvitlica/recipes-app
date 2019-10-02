import React,{Component} from 'react';
import './Dropdown.css';
import axios from 'axios'
class Dropdown extends Component {
    state = {
            categories: [],
            showCategories: false,
            selectedMeals:this.props.categories && this.props.categories[0]
          };
        
      
    componentDidMount(){
        axios.get('/categories.php').then (response => {
           console.log(response.data.categories)
           this.setState({
             ...this.state,
             categories: response.data.categories
           })
        })
    }
    dropDown = () => {
        this.setState(prevState=>( {
            showCategories:!prevState.showCategories,}))
    }
    selectMeals = (meals) => this.setState({
        selectedMeals : meals,
        showCategories : false,
    }

    )

         render() {
        
            return <div>
                <div className="select-box--arrow"
                onClick={this.dropDown}>
                    <span 
                    className={`${this.state.showCategories ? 'select-box--arrow-up': 'select-box--arrow-down'}`}
                 />
                </div>
                <div 
                style={{display:this.state.showCategories ? 'block': 'none'}}>
                {
                    this.state.categories.map(meals=><div key={meals.id}
                    onClick={() =>this.selectMeals(meals)}
                    className={this.state.selectedMeals === meals ? 'selected' : ''}
                    >
                        {meals.value}
            
                        </div>)
                }
                        </div>
                        </div>
                        }
                        
}
                
                
    export default Dropdown;