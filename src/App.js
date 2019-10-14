import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Users} from './Users'
import {Clock} from './Clock'

//https://pucminas.instructure.com/courses/1823/pages/ciclo-de-vida-de-um-componente-componentdidupdate?module_item_id=191088
//vamos fazer uma pesquisa somente se o valor pesquisado for diferente do que já foi buscado
class App extends Component{
  state = {
    searchForUser: '',
    isClockHidden: false,
  }

  hideClock = () => {
    this.setState({isClockHidden: true})
  }

  render() {    
    const handleFormSubmit = (event) => {
      event.preventDefault()
      const inputValue = document.getElementById("search-input").value
      this.setState({
        searchForUser: inputValue
      })
    }

    if (this.state.isClockHidden){
      return (
        <div>
        <form onSubmit={handleFormSubmit}>
          <input id="search-input" placeholder="Search for user" />
          <button>Search</button>
        </form>
        <Users searchFor={this.state.searchForUser}/>        

      </div>     
      )       
    }

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input id="search-input" placeholder="Search for user" />
          <button>Search</button>
        </form>
        <Users searchFor={this.state.searchForUser}/>
        <button onClick={this.hideClock}>Hide Clock</button>        
        <Clock />

      </div>     
    )  
  }
}

export default App;
