import React from 'react'
import * as t from "prop-types"
const TodoForm = (props) => {
    return (
   <form onSubmit={props.addTask} >
       <input type='text' value={props.currentTask} onChange={props.updateTask}/>
       <button type='submit'>Submit</button>
   </form>
    
    )
    
}
TodoForm.propTypes = {
    currentTask:t.string.isRequired,
    updateTask:t.func.isRequired,
    addTask:t.func.isRequired,
}
export default TodoForm;