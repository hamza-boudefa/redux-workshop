import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../constans/TodoContant";

const initialState=[]

export const TodoReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case ADD_TODO:
            return [...state,payload]
        case EDIT_TODO:
            return state.map((todo)=>todo.id==payload.id?{...todo,text:payload.text}:todo)
        case DELETE_TODO:
            return state.filter((todo)=>todo.id!=payload)    
        default:
            break;
    }

}
export default TodoReducer

