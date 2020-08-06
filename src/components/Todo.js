import React from "react";

const Todo =props=>{
    return(
        <div
            className={`list${props.list.completed ? "completed":" "}`}
            onClick={()=>{props.toggleList(props.list.id)}}>
            <p>{props.list.task}</p>

        </div>
    )
}

export default Todo;