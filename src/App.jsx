import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import TodoForm from "./component/TodoForm";
import { Provider } from "react-redux";
import store from "./central_store/store";
import TodoList from "./component/TodoList";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <Container fluid>
        <TodoForm />
        <TodoList />
      </Container>
    </Provider>
  );
}

export default App;
