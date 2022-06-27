import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/TodoAction';

const AddTodo = () => {
const [input, setInput] = useState("")
const handleInput=(e)=>{
setInput(e.target.value)
}

const dispatch= useDispatch()

  return (
    <div>
        <input value={input} onChange={(e)=>handleInput(e)} ></input>
            <Button onClick={()=>dispatch(addTodo({id:Math.random(),text:input}))} >ADD</Button>
    </div>
  )
}

export default AddTodo