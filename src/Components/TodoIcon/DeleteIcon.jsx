import React from 'react'
import {TodoIcon} from './index.jsx'
function DeleteIcon(props) {
    return (
        <TodoIcon 
        type='delete'
        color='gray'
        onClick={props.onDelete}/>
      );
}

export {DeleteIcon}