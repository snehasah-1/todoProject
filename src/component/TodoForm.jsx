import React, { useState, useEffect } from "react";
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
import { addTodo, editTodo } from "../action/todo";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const TodoForm = ({ addTodo, editFormVisibility, editData, editTodo, handleEditClick }) => {
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return toast("Please enter todo title", { type: "error" });
    }
    const todo = {
      title,
      id: v4(),
      todoStatus: false,
    };
    addTodo(todo);

    setTitle("");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTitle === "") {
      return toast("Please enter todo title", { type: "error" });
    }
    const editedTodo = {
      title: editTitle,
      id: editData.id,
      todoStatus: editData.todoStatus,
    };
    editTodo(editedTodo);
    setEditTitle("")
    handleEditClick({},false);
  };

  useEffect(() => {
    setEditTitle(editData.title);
  }, [editData]);
  return (
    <>
      <Row>
        <h1 style={{ color: "green" }}>Things To Do</h1>
      </Row>
      <Row className="mt-2 ">
        <Col md={4} className="offset-sm-4">
          {editFormVisibility === false ? (
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
                    Add
                  </Button>
                </InputGroup>
              </FormGroup>
            </Form>
          ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      name="title2"
                      id="title2"
                      onChange={(e) => setEditTitle(e.target.value)}
                      value={editTitle || ""}
                    />
                    <Button color="warning" onClick={handleEditSubmit}>
                      Update
                    </Button>
                  </InputGroup>
                </FormGroup>
              </Form>
          )}
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
  editTodo: (editedTodo) => {
    dispatch(editTodo(editedTodo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
