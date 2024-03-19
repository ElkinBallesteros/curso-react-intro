import React, { useContext } from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';
function CreateTodoButton() {
  const {setOpenModal} = useContext(TodoContext)
  return (
   <button className='CreateTodoButton'
   onClick={(event)=>{
    event.preventDefault();
    setOpenModal(state => !state);
   }}>+</button>
  )
}

export {CreateTodoButton};