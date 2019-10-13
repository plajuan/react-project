import React from 'react';
import { TodoListItem } from './TodoListItem';
//aula 3
export function TodoList(){
    const taskItems = [
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

    const handle = (taskName) => alert(taskName)

    return(
        <ul>            
           {taskItems.map(task =>( 
            <li key={task.id}>
            <TodoListItem onShowTaskName={handle} {...task} />
            </li>
           ))
           }
        </ul>
    )
}