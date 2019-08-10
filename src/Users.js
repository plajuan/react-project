import React, {Component} from 'react'

export class Users extends Component {
    state = {
        usersList: ['Anicetos', 'Luiz Gonzaga', 'Fagner'],
        givenPropIsUser: undefined,
    }

    render(){
        return (
            <h1>There is no User yet</h1>
        )
    }
}