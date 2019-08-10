import React from 'react'
import PropTypes from 'prop-types'

//Aula 5
export function TodoListItem(_props){
    return(
        <div>
            <input type='checkbox' onChange={(event)=>_props.onToggleComplete(_props.id, event)} />
            <b style={{textDecoration: _props.status === 'completed' ? 'line-through' : 'none'}}>
                {_props.name} 
            </b>
            
        </div>
    )
}

/*Aula 4 
<b>
    {_props.name} <button onClick={()=>_props.onShowTaskName(_props.name)}>Alert task</button> 
</b>
*/
TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onShowTaskName: PropTypes.func,
}