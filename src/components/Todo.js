import { Button } from 'react-bootstrap'
import React from 'react'
import EditTodo from './EditTodo'
import { useDispatch } from 'react-redux'
import {DeleteTodo} from '../redux/actions/TodoAction'

const Todo = ({el}) => {

    const dispatch= useDispatch()
  return (
    <div>
        <h1>{el.text} </h1>
        <EditTodo el={el} />
        <Button onClick={()=>dispatch(DeleteTodo(el.id))} >delete todo</Button>

    </div>

  )
}

export default Todo