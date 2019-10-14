import React, {Component} from 'react'

export class Users extends Component {
    state = {
        usersList: ['Samuel Martins', 'Elon Musk', 'Steve Jobs'],
        givenPropIsAnUser: undefined,
    }
    //economiza chamadas pois só faz se o valor for diferente
    componentDidUpdate(prevProps){
        if(prevProps.searchFor != this.props.searchFor){
            if(this.state.usersList.includes(this.props.searchFor)){
                this.setState({
                    givenPropIsAnUser: true
                })
            } else {
                this.setState({
                    givenPropIsAnUser: false
                })
            }
        }
    }

    render(){
        if (this.state.givenPropIsAnUser){
            return (
                <h1>User found</h1>
            )
        } else {
            return (
                <h1>No User yet</h1>
            )
        }
        
    }
}