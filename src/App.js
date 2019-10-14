import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Users} from './Users'

//https://pucminas.instructure.com/courses/1823/pages/ciclo-de-vida-de-um-componente-componentdidupdate?module_item_id=191088
//vamos fazer uma pesquisa somente se o valor pesquisado for diferente do que já foi buscado
class App extends Component{
  state = {
    searchForUser: ''
  }

  render() {    
    const handleFormSubmit = (event) => {
      event.preventDefault()
      const inputValue = document.getElementById("search-input").value
      this.setState({
        searchForUser: inputValue
      })
    }

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
}

export default App;
