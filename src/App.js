//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';


class App extends Component{
    constructor(){
      super();
    
    this.state = {
      monsters:[],
      searchField: ''
    };

}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(user => this.setState({monsters : user}))
}
  render (){
    return (
      
      <div className="App">
        <input type='search' placeholder='search monsters' />
        <CardList monsters={this.state.monsters}/>  
      </div>
    );
  }
}



export default App;
