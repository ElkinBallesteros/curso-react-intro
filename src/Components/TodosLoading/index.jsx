import React from 'react'
import './TodosLoading.css'
function TodosLoading() {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'/>
      <p className='LoadingTodo-text'/>
      <span className='LoadingTodo-deleteIcon'/>
    </div>
  )
}

export {TodosLoading}