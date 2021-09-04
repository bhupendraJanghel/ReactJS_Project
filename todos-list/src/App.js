
import './App.css';
import Header from "./Component/Header";
import { Footer } from "./Component/Footer";
import { Todos } from "./Component/Todos";
import { AddTodo } from "./Component/AddTodo";
import React, { useState , useEffect} from 'react';
function App() {
  let rootStyle={
    backgroundColor : "lightgrey",
  }
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (props) => {
    console.log("i am on delete", props);
    //Deleting this way in react does not work
    //let index = todos.indexOf(props)
    //todos.slice(index,1)

    setTodos(todos.filter((e) => {
      return e !== props;
    }))
  }

  const onAddTodo = (title, desc) => {
    let sno
    if (todos.length == 0) {
      sno =1
    } else {
      sno = todos[todos.length -1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo)
    setTodos([...todos, myTodo])
    
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <div style={rootStyle}>
      <Header title="Todo List" searchBar={false} />
      <AddTodo onAddTodo={onAddTodo} />
      <Todos item={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
