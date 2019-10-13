import React from 'react';
import PropTypes from 'prop-types'
//aula 3
export function TodoListItem(_props){
    return (
        <div>
            <input type="checkbox" onChange={(event) => _props.onToggleCompleted(_props.id, event)} /> 
            <b style={ {textDecoration: _props.status === 'completed' ? 'line-through' : 'none'}  }>{_props.name}</b>
        </div>
    )
}

TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onToggleCompleted: PropTypes.func,
}