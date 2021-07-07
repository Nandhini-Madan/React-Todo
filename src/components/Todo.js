import React from "react";

const Todo =props=>{
    return(
        <div className="allign">
            
            <p className={`list ${props.list.completed ? "completed":" "}`}>{props.list.task}</p>
            
            <button className="donebtn" onClick={()=>{props.toggleList(props.list.id)}}>Done</button>

        </div>
    )
}

export default Todo;