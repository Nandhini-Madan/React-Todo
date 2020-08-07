import React from "react";

class SearchForm extends React.Component {
    //Constructor with state
    constructor() {
        super();
        this.state = {
           
            search:""
        };
    }
    
    searchTask=e=>{
        this.setState({
            search:e.target.value
        });
    };
    submitList=e=>{
        e.preventDefault();
      
        this.props.searchTask(this.state.search);
        this.setState({
          
            search:""
        });
    };
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.submitList}>
                  
                    <input 
                    type="text"
                    name="search"
                    value={this.state.search}
                    onChange={this.searchTask}
                    />
                    <button className="clear-btn">search</button>
                </form>
            </div>
        );
    }
}
export default SearchForm;