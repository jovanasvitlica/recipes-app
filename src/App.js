import React , { Component }from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Login from './Login';
import Meals from './Meals';
class App extends Component {

  render(){
  
    return (
      <div className="App">
      <BrowserRouter>
      <Login/> 
      <Meals/>                   
      <Footer />
      </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
