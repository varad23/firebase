import React, { Component } from 'react';
import fire1 from './fire1';
import "./App.css"
//class based component
class Message extends Component {
    constructor(props) {
     super(props);
     this.state = { messages: []
    };
   }
//lifecycle method
   componentWillMount(){
    let messagesRef = fire1.database().ref('varad').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
    let message = { text: snapshot.val(), id: snapshot.key };
    let phone = { text: snapshot.val(), id: snapshot.key };
    this.setState({ messages: [message].concat(this.state.messages)  
    });
    
   })
   }
//on submit event
   addMessage(e){
    e.preventDefault();
    fire1.database().ref('varad').push( this.inputEl.value ); 
    this.inputEl.value = '';
    }
    render() {
        return (
         <form onSubmit={this.addMessage.bind(this)}>
      <textarea name="How Can We Help You" ref={ el => this.inputEl = el } ></textarea>
          
         <br/>
          <button className="button button1">Submit</button>
          
         </form>
         
       );}
}
export default Message 