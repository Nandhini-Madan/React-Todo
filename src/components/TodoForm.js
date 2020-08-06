import React from "react";

class TodoForm extends React.Component {
    //Constructor with state
    constructor() {
        super();
        this.state = {
            list: ""
        };
    }
    handleChange=e=>{
        this.setState({
            list:e.target.value
        });
    };
    submitList=e=>{
        e.preventDefault();
        this.props.addTask(this.state.list);
        this.setState({
            list:""
        });
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.submitList}>
                    <input 
                    type="text"
                    name="list"
                    value={this.state.list}
                    onChange={this.handleChange}
                    />
                    <button className="clear-btn">Add</button>
                </form>
            </div>
        );
    }
}
export default TodoForm;