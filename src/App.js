import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    //const monsters = this.state.monsters;       |
    //const searchField = this.state.searchField; V
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster/* CURRENT MONSTER */ =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}>
          {
            this.state.monsters.map(monster => <h1 key={monster.id} > {monster.name} </h1>)
          }
        </CardList>
        {console.log(CardList)}
      </div >
    )
  }
}

export default App;
