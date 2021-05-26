import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.components'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchFeild: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  //Arrow functions automatically allow us to set "this" when this(eg. function below) thing is defined.
  //So we don't have to use binding every time we define class methods. //lec-30
  handleChange = (e) => {
    this.setState({searchFeild : e.target.value});
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
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>

      </div>
    ); 
  }
}

export default App;
