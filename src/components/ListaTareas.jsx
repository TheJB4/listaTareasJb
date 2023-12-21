import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {
      arrayTareas.map((tarea, posicion) => (<ItemTarea key={posicion} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>))}
    </ListGroup>
  );
};

export default ListaTareas;
