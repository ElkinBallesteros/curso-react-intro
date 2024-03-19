import React, { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext';
function TodoForm() {
    const  {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onCancel = (event) =>{
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Adicionar nuevo TODO</label>
        <textarea 
        placeholder='Cortar cebolla para el almuerzo'
        value={newTodoValue}
        onChange={onChange}/>
        <div className='TodoForm-buttonContainer'>
            <button type='button'
            className='TodoForm-button
            TodoForm-button--cancel'
            onClick={onCancel}>Cancelar</button>
            <button className='TodoForm-button
            TodoForm-button--add'>Añadir</button>
        </div>
    </form>
  )
}

export {TodoForm}