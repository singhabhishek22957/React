import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'

function Todos() {
  const todos = useSelector((state)=> (state.todos))
  const dispatch = useDispatch()

  return (
    <div>
    <div>My Todos</div>
    {
      todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))}> Remove</button>
        </li>
        
      ))
    }
    </div>
  )
}

export default Todos