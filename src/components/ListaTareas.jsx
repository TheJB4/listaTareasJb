import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arrayTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {
      //arrayTareas.map((todo, posicion) => (<ItemTarea key={posicion} todo={todo} borrarTarea={borrarTarea}></ItemTarea>))
      arrayTareas.map((todo,posicion)=>(
        <ItemTarea key={posicion} todo={todo} borrarTarea={borrarTarea}></ItemTarea>
      ))
      }
    </ListGroup>
  );
};

export default ListaTareas;
