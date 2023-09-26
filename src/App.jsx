import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";


import { Provider } from "react-redux";
import store from "./central_store/store";

import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify'


function App() {

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editData, setEditData] = useState('');

  const handleEditClick=(todo,stat)=>{
    setEditFormVisibility(stat);
    setEditData(todo);
  }

  return (
    <Provider store={store}>
      <ToastContainer />
      <Container fluid>
        <TodoForm handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} editData={editData}/>
        <TodoList handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      </Container>
    </Provider>
  );
}

export default App;
