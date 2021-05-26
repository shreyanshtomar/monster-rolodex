import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchFeild: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  //Re-Rendering every time state changes(specifically in search field => dynamic search)
  render(){
    const {monsters, searchFeild} = this.state; // Destructuring the state

    //only include monsters that contains the string in search field
    //filter method will iterate over all the monsters and check if it constains the string(case insensitive) and inlcudes returns true,
    // then in the end filter method will return the array of filteredMonsters/
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()))

    return (
      <div className="App">
        <input 
          type = "search" 
          placeholder = "search monsters" 
          onChange = {e => this.setState({searchFeild : e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    ); 
  }
}

export default App;
