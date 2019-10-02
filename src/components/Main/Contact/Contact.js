import React , { Component } from 'react';
import './Contact.css'
import ContactForm from '../../Styles/ContactForm'
class contact extends Component {

    state= {
        firstName:'',
        lastName:'',
        Email:'',
        Message:'',
        sendingMsg:false,
        isModalOpened:false
    }
    handleSubmit = event => {
       
        event.preventDefault();
    };
    
    changedNameHandler=(event)=>{
        this.setState(
            {
                ...this.state,
                firstName : event.target.value
            }
          )     
    }
    changedLastNameHandler=(event)=>{
        this.setState(
            {
                ...this.state,
                lastName : event.target.value
            }
          ) 
    }

    changedEmailHandler=(event)=>{
        this.setState(
            {
                ...this.state,
                Email : event.target.value
            }
          )   
    }

    changedMsgHandler=(event)=>{
        this.setState(
            {
                ...this.state,
                Message : event.target.value
            }
          )    
    }

    sendingMsg =()=>{
        if(this.state.firstName ==="" ||
        this.state.lastName ===''||
        this.state.Email ==='' ||this.state.Message ==='') {
            return
        }
        let MessageBody = [this.state.firstName,
            this.state.lastName,
            this.state.Email,this.state.Message ]

        localStorage.setItem('FirstName', MessageBody[0]);
        localStorage.setItem('LastName', MessageBody[1]);
        localStorage.setItem('Email', MessageBody[2]);
        localStorage.setItem('Message', MessageBody[3]);
        this.setState(
            { 
                sendingMsg:true
            }
          ) 
    }

    modalClosedHandler = () =>{
        this.setState(
            {              
                sendingMsg:false
            }
          ) 
    }
    render(){
        const handleSubmit = event => {
       
            event.preventDefault();
          };
          
        return(
            <div className="Contact">
                <ContactForm show={this.state.sendingMsg}
                        modalClosed={this.modalClosedHandler}>
                    <h3>Your message has been sent successfully.
                    </h3>
                </ContactForm>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name"
                onChange={this.changedNameHandler}></input>
                <input type="text" placeholder="Last Name"
                onChange={this.changedLastNameHandler}></input>
                <input type="email" placeholder="Email"
                onChange={this.changedEmailHandler}></input>
                <textarea placeholder="Message"
                onChange={this.changedMsgHandler}/>
                <button type="submit"
                onClick={this.sendingMsg}
                >Send</button>
            </form>
        </div>    
        )
    }
       
    
    

    
}

export default contact