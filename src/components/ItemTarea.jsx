import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = ({todo, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {todo.todo} <Button variant="danger" onClick={()=> borrarTarea(todo._id)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
