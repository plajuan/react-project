import React, {Component} from 'react'
import { TodoListItem } from './TodoListItem';
export class TodoList extends Component{
    state = {
        listTitle: '',
        taskItems : [
            { id: 1, name: 'task 1', status: 'pending'},
            { id: 2, name: 'task 2', status: 'pending'},
            { id: 3, name: 'task 3', status: 'pending'}
        ]
    }
       
    //#6 Did mount é chamado imediatamente após a renderização de um componente
    componentDidMount(){
        console.log('did Mount')
        this.setState({listTitle:'Lição 6'})
    }

    render(){
        const handleShowTaskName = (taskname) => alert(`clicou em ${taskname}` )

    const handleOnToggleComplete = (taskID, event) =>{
        this.setState({
            taskItems: this.state.taskItems.map(task=>{
                if(task.id == taskID){
                    return {...task, status:event.target.checked ? 'completed' : 'pending'}
                }
                return task
            }) 
        })
        
    }
        return (
            <div>
                <h1>{this.state.listTitle}</h1>
                <ul>
                    {this.state.taskItems.map(task => <li><TodoListItem onToggleComplete={handleOnToggleComplete} onShowTaskName={handleShowTaskName} {...task} /></li>)}
                </ul>
            </div>
            
        );
    }

    
}