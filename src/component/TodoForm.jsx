import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import { addTodo } from "../action/todo";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return toast("Please enter todo title", { type: "error" });
    }
    const todo = {
      title,
      id: v4(),
      todoStatus:false,
    };
    addTodo(todo);

    setTitle("");
  };

  return (
    <>
      <Row>
        <h1 style={{color:"green"}}>Things To Do</h1>
      </Row>
      <Row className="mt-2 ">
        <Col md={4} className="offset-sm-4">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <Button color="warning" onClick={handleSubmit}>
                  Add Todo
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
