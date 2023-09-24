import React from "react";
import { ListGroup, ListGroupItem,Row,Col } from "reactstrap";
import {connect} from "react-redux";
import { markComplete } from "../action/todo";
import { toast } from "react-toastify";
import { FaCheckCircle, FaTrash,FaRegSquare,FaPen } from "react-icons/fa";

const Todo = ({ todoReducer, markComplete }) => {
  return (
    <Row>
      <Col md={4} className="offset-sm-4">
        <ListGroup>
        {todoReducer.map((todo) => (
          <ListGroupItem key={todo.id}>
            <span style={{float:"left"}}>
              {!todo.todoStatus?(
                <FaRegSquare
                className="text-primary"
                onClick={() => markComplete(todo.id
                  ,true)}
              />
              ):(
                <FaCheckCircle
                className="text-success"
                onClick={() => markComplete(todo.id
                  ,false)}
              />
              )}
            </span>
            <span style={{float:"left", marginLeft:"20px"}}>
              {todo.title}
            </span>
            <span style={{float:"right", marginLeft:"20px"}}>
              <FaTrash className="text-danger"/>
            </span>
            <span style={{float:"right", marginLeft:"10px"}}>
              <FaPen className="text-primary" />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  todoReducer: state.todoReducer,
});
const mapDispatchToProps = (dispatch) => ({
  markComplete: (id,todoStatus) => {
    dispatch(markComplete(id,todoStatus));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
