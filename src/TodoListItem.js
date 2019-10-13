import React from 'react';
import PropTypes from 'prop-types'
//aula 3
export function TodoListItem(_props){
    return (
        <div>
            <b>{_props.name}</b><button onClick={() => _props.onShowTaskName(_props.name)}>Alert task name</button>
        </div>
    )
}

TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    onShowTaskName: PropTypes.func,
}