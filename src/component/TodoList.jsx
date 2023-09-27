import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import {connect} from "react-redux";
import { toast } from "react-toastify"; 
import { markComplete, removeTodo } from "../action/todo";
import { SquareIcon, CheckCircleIcon, TrashIcon, PenIcon } from '../icons/IconsModule';

const Todo = ({ todoReducer, markComplete, removeTodo, handleEditClick, editFormVisibility }) => {
  localStorage.setItem("todos", JSON.stringify(todoReducer));
  return (
    <Row>
      <Col md={4} className="offset-sm-4">
        <ListGroup>
          {todoReducer.map((todo) => (
            <ListGroupItem key={todo.id}>
              <span style={{ float: "left" }}>
                { editFormVisibility === false && (
                  !todo.todoStatus ? (
                    editFormVisibility === false && (
                    <SquareIcon
                      onClick={() => markComplete(todo.id, true)}
                    />
                    )
                  ) : (
                    <CheckCircleIcon
                      onClick={() => markComplete(todo.id, false)}
                    />
                  ))}
              </span>
            
              <span style={todo.todoStatus?{textDecoration:"line-through", float: "left", marginLeft: "20px" }:{ float: "left", marginLeft: "20px" }}>
                {todo.title}
              </span>
            
              {editFormVisibility === false && (
                <>
                  <span style={{ float: "right", marginLeft: "20px" }}>
                    <TrashIcon
                      onClick={() => removeTodo(todo.id)}
                    />
                  </span>
                
                  <span style={{ float: "right", marginLeft: "10px" }}>
                    <PenIcon onClick={() => handleEditClick(todo,true)} />
                  </span>
                </>
              )}
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
  removeTodo: (id) => {
    dispatch(removeTodo(id));
  },
  editTodo: (todoId,todoEdit) => {
    dispatch(editTodo(todoId,todoEdit));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
