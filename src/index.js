import React from "react"
import ReactDOM from "react-dom"

//const element = <h1>Hello TODO Create React</h1>
//ReactDOM.render(element, document.getElementById("root"))

import TodoContainer from "./components/TodoContainer"
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, 
  document.getElementById("root")
)