import React from 'react';
import PropTypes from 'prop-types'

export function TodoListItem(_props){
    return (
        <div>
            <b>{_props.name}</b>
        </div>
    )
}

TodoListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
}