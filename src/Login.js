import React , { Component }from 'react';
import './components/Header/SearchBar/SearchBar.css'
import './components/Header/StyleHeader/StyleHeader.css'
import { Route } from 'react-router-dom';

import SearchBar from './components/Header/SearchBar/SearchBar'
import MyMeals from './components/MyMeals/MyMeals'
import Menu from './components/Header/Menu/Menu'
import SingleMeal from './components/SingleMeal/SingleMeal'
import SingleCategoryMeal from './components/SingleCategory/SingleCategoryMeal/SingleCategoryMeal'
import ChosenMeal from './components/SingleMeal/ChosenMeal/ChosenMeal';


import axios from 'axios'
import { Link } from 'react-router-dom'


class Login extends Component {

  state = {
   
    mealsbyCategory: [],
    choosenMealDetails:[],
    SearchedArray:[],
    randomMeal1:[],
    randomMeal2:[],
    randomMeal3:[],
    choosenMeal:"",
    choosedCategory:'',
    value: '',
    showframe : false,
    isAtHomePage: true,
    isLogged:false,
    typedUsername :'',
    typedPassword:"",
    username : 'jovana@jovana.com',
    password: 'admin'
    
  }

  componentDidMount(){
  
    axios.get('/random.php').then (response => {        
      this.setState({
        ...this.state,
        randomMeal1: response.data.meals
      })
    })

    axios.get('/random.php').then (response => {        
       this.setState({
         ...this.state,
         randomMeal2: response.data.meals
       })
     })

     axios.get('/random.php').then (response => {        
       this.setState({
         ...this.state,
         randomMeal3: response.data.meals
       })
     })
  
}

searchresChangedHandler = (event) => {
    this.setState(
      {
        ...this.state,
        value : event.target.value
      }
    )
    
  }



  ChangedMailHandler = (event) => {
    this.setState(
      {
        ...this.state,
        typedUsername : event.target.value
      }
    )
    
  }

  ChangedPasswordHandler = (event) => {
    this.setState(
      {
        ...this.state,
        typedPassword : event.target.value
      }
    )
    
  }
  logOutHandler =()=>{
    this.setState (
      {
        ...this.state,
        isLogged:false
      }
    )
  }
  avatarClcikedHandler = () =>{
    this.setState (
      {
        ...this.state,
        showframe:!this.state.showframe
      }
    )
  }


  myMealsClicked =()=>{
    this.setState (
      {
        ...this.state,
        isAtHomePage : false,
        isLogged:true
      }
    )
  }

  homeClicked=()=>{
    this.setState (
      {
        ...this.state,
        isAtHomePage : true
      }
    )
  }

  logginHandler =() => {
    if(this.state.typedUsername==="jovana@jovana.com" &&
    this.state.typedPassword==="admin" ){
      this.setState (
        {
          ...this.state,         
          isLogged : true,
          showframe : false

        }
      )
    }
  }

clickHandler=(CategoryName)=>{
  this.setState (
    {
      ...this.state,
      choosedCategory:CategoryName,
      isAtHomePage : false
    }
  )
  console.log('clicked')
  axios.get('/filter.php?c='+CategoryName).then (response => {
    console.log(response.data.meals)
    this.setState({
      ...this.state,
      mealsbyCategory: response.data.meals
    })
  })
}

clickHandlerMeal=(MealId)=>{

  this.setState (
    {
      ...this.state,
      choosenMeal:MealId,
      isAtHomePage : false
    }
    

  )
  console.log('clicked')
  axios.get('/lookup.php?i='+MealId).then (response => {
    console.log(response.data.meals)
    this.setState({
      ...this.state,
      choosenMealDetails: response.data.meals
    })
  }).catch(error=>{
    return
  })
}



  render(){
    
    
    const meals = this.state.mealsbyCategory.map(
                      meal => {
                          return <Link to="/meal" className="SingleCategoryMeal" 
                                                 onClick={() => this.clickHandlerMeal(meal.idMeal)}
                                                  key={meal.idMeal}
                                                  ><SingleCategoryMeal          
                          mealName = {meal.strMeal}
                          link = {meal.strMealThumb}
                          key={meal.idMeal}/>
                          </Link>
                      }
                  )
   const randomMeal1 = this.state.randomMeal1.map(
    meal => {
        return <Link to="/meal" className="SingleCategoryMeal" 
                               onClick={() => this.clickHandlerMeal(meal.idMeal)}
                                key={meal.idMeal}
                                ><SingleCategoryMeal          
        mealName = {meal.strMeal}
        link = {meal.strMealThumb}
        key={meal.idMeal}/>
        </Link>
    }
)
const randomMeal2 = this.state.randomMeal2.map(
  meal => {
      return <Link to="/meal" className="SingleCategoryMeal" 
                             onClick={() => this.clickHandlerMeal(meal.idMeal)}
                              key={meal.idMeal}
                              ><SingleCategoryMeal          
      mealName = {meal.strMeal}
      link = {meal.strMealThumb}
      key={meal.idMeal}/>
      </Link>
  }
)

const randomMeal3 = this.state.randomMeal3.map(
  meal => {
      return <Link to="/meal" className="SingleCategoryMeal" 
                             onClick={() => this.clickHandlerMeal(meal.idMeal)}
                              key={meal.idMeal}
                              ><SingleCategoryMeal          
      mealName = {meal.strMeal}
      link = {meal.strMealThumb}
      key={meal.idMeal}/>
      </Link>
  }
)
   let FinishedMeal = this.state.choosenMealDetails                   
   const mealDetails = FinishedMeal.map(
    meal=>{
      return <ChosenMeal
      mealName={meal.strMeal}
      link={meal.strMealThumb}
      category = {meal.strCategory}
      country ={meal.strArea}
      video = {meal.strYoutube}
      description ={meal.strInstructions}
      hashtags = {meal.strTags}
      key = {meal.strMeal}
      ingredients = {[meal.strIngredient1,meal.strIngredient2,meal.strIngredient3,meal.strIngredient4,meal.strIngredient5,meal.strIngredient6,meal.strIngredient7,meal.strIngredient8,meal.strIngredient9,meal.strIngredient10]}
      measurments = {[meal.strMeasure1,meal.strMeasure2,meal.strMeasure3,meal.strMeasure4,meal.strMeasure5,meal.strMeasure6,meal.strMeasure7,meal.strMeasure8,meal.strMeasure9,meal.strMeasure10]}
              />
  }
                )
    return (
      <div className="FoodApp">
        
        <div className="StyleHeader">
    
                <SearchBar 
                changed= {this.searchresChangedHandler}searchRoute={this.searchRoute}
                value = {this.state.value}
                clicked = {this.clickedHandler}/>
                <Menu username ={this.state.username}
                      password = {this.state.username}
                      show={this.state.showframe}
                      avatarClicked={this.avatarClcikedHandler}
                      atHome={this.state.isAtHomePage}
                      isLogged={this.state.isLogged}
                      clicked={this.logginHandler}
                      valueMail={this.state.typedUsername}
                      valuePw={this.state.typedPassword}
                      changedMail= {this.ChangedMailHandler}
                      changedPw= {
                        this.ChangedPasswordHandler
                      }
                      logOut={this.logOutHandler}
                      myMealsClick = {this.myMealsClicked}
                      homeClicked ={this.homeClicked}
                      />
                
        </div>

        

      
        <Route path="/meal" render={()=>{
          return <SingleMeal 
                      MealDetails = {mealDetails}
                      meals= {meals}/>
        }}  />

     
<Route path="/myMeals" render={()=>{
          return <MyMeals 
          randomMeal1={randomMeal1}
          randomMeal2={randomMeal2}
          randomMeal3={randomMeal3}/>
        }}  />
                 
        
      </div>
    );
  }
  
}

export default Login;
