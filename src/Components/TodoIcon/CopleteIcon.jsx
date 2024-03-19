import React from 'react'
import {TodoIcon} from './index.jsx'

function CopleteIcon(props) {
  return (
    <TodoIcon 
    type='check'
    color={props.completed?'green':'gray'}
    onClick={props.onComplete}/>
  );
}

export {CopleteIcon}