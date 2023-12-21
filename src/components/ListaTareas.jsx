import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas }) => {
  return (
    <ListGroup>
      {
      arrayTareas.map((tarea, posicion) => (<ItemTarea key={posicion} tarea={tarea}></ItemTarea>))}
    </ListGroup>
  );
};

export default ListaTareas;
