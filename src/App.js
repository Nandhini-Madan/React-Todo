import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import SearchForm from "./components/SearchForm"


const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Bake Cookies1',
    id: 1528816184358,
    completed: false
  },
  {
    task: 'Bake Cookies2',
    id: 1528717084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList
    };
  }
  toggleList=listId=>{
    console.log(listId);
    this.setState({
      toDoList:this.state.toDoList.map(
        list=>{
          if(listId===list.id){
            return{
              ...list,
              completed:!list.completed
            };
          }
        return list;
        })
    });
  };

  clearcompleted=e=>{
   this.setState({
     toDoList:this.state.toDoList.filter(
       list=>!list.completed
     )
   })
  }
  addTask=item=>{

  const newitem={
    task: item,
    id:2,
    completed: false
  }
  this.setState({
    toDoList:[...this.state.toDoList,newitem]
  });
  };

  searchTask=item=>{
    console.log("item",item);
    this.setState({
      toDoList:this.state.toDoList.map(
        list=>{
          if(item===list.task){
            console.log("Sucess",list.task,list.id,list.completed);
            return{
            
            ...list
              
            };
          }
     //   return list;
        })
    });
  }
  
render() {
  return (
    <div className="App">
      <div className="header">
      <h2>Welcome to your Todo App!</h2>
      </div>
      <TodoForm 
        addTask={this.addTask}
       
      />
      <SearchForm 
       searchTask={this.searchTask}
       />
      <TodoList
        todolist={this.state.toDoList}
        toggleList={this.toggleList} 
        clearcompleted={this.clearcompleted}
        
        />
       
    </div>

  );
}
}

export default App;
