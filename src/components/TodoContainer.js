import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"

class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment1",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content2",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server3",
            completed: false
          }
        ]
       };  


  render() {
    return (
        <div>
            <Header/>
          <TodosList todos={this.state.todos} />
        </div>
      /*
      <div>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>
      */
    )
  }
}
export default TodoContainer