import { Button,Modal,Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/actions/TodoAction'

const EditTodo = ({el}) => {
const [show, setShow] = useState(false)
const handleShow=()=>{
setShow(!show)
}


const [desc, setDesc] = useState(el.text)
const handleText=(e)=>{
    setDesc(e.target.value)
}

const dispatch=useDispatch()
  return (
    <div>
         <>
        <Button s variant="primary" onClick={handleShow}>
            edit
        </Button>

        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title  >Edit My Todo</Modal.Title>
            </Modal.Header>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="add todo ..."  value={desc} onChange={handleText} />
            </Form.Group>
        </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                    Close
                </Button>
                <Button  variant="primary" onClick={()=>dispatch(editTodo({id:el.id,text:desc}))} >
                    save
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    </div>
  )
}

export default EditTodo