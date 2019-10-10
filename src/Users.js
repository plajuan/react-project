import React, {Component} from 'react'

export class Users extends Component{
  state = {
      usersList: ['Anicetos', 'Fagner', 'Luiz Gonzaga'],
      givenPropIsAUser: undefined,
  }

  componentDidUpdate(){
      console.log('update')
      if (prevProps.searchFor != this.props.searchFor){
          if(this.state.usersList.includes(this.props.searchFor)){
            console.log('achou')
            this.setState({
                givenPropIsAUser: true
            })
          } else {
            console.log('não achou')
            this.setState({
                givenPropIsAUser: false
            })
          }
      }
  }

  render(){
      if(this.state.givenPropIsAUser === true){
        return (
            <h1>achou!</h1>
        )
      } else if(this.state.givenPropIsAUser === false){
        return (
            <h1>Nenhum usuário</h1>
        )    
      }
      return (
          <h1>Nenhum usuário</h1>
      )
  }

}