import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTask, removeTasks } from "../../../redux/actions/tasksAction";

    const TaskInput = (props) =>{
        const inputRef = useRef("") 
        return (
            <div>
                <input onChange={(event)=> {
                    inputRef.current=event.target.value
                    }}></input>
                <button onClick={()=>{props.addTask({
                    id: new Date(),
                    title: inputRef.current,
                    completed: false 
                })}}>Add Task</button>
                <button onClick={()=>{props.removeTasks()}}>Remove all Tasks</button>
            </div>
        )
    }


const mapDispatchToProps = {
    addTask: addTask,
    removeTasks: removeTasks
}

export default connect(null, mapDispatchToProps)(TaskInput) 

