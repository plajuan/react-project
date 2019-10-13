import React, {Component} from 'react';
import { TodoListItem } from './TodoListItem';
//aula 3
export class TodoList extends Component {
    state = {
        taskItems: [
            {
                id: 1, name: 'Task 1', status: 'pending'
            },
            {
                id: 2, name: 'Task 2', status: 'pending'
            },
            {
                id: 3, name: 'Task 3', status: 'pending'
            },
        ]
    }

    //const handle = (taskName) => alert(taskName)
    //O componente não muda pois já foi renderizado
    //para renderizar novamente, é necessário usar os "class components" ao invés de function components
    

    render(){
        const handleOnToggleCompleted = (taskId, event) => {
            this.setState({
                taskItems: this.state.taskItems.map(task => {
                    if (task.id === taskId){
                        return {...task, status: event.target.checked ? 'completed' : 'pending'}
                    }
                    return task
                })
            })
        }

        return(
            <ul>            
               {this.state.taskItems.map(task =>( 
                <li key={task.id}>
                <TodoListItem onToggleCompleted={handleOnToggleCompleted} {...task} />
                </li>
               ))
               }
            </ul>
        )
    }
    
}