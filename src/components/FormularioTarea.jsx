import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar el state tarea en el arrayTareas
    // spread ...
    setArrayTareas([...arrayTareas, tarea])
   //limpiar el formulario
   setTarea('');
  };

  const borrarTarea = (nombreTarea)=>{
    //borramos una tarea
    const arregloFiltrado = arrayTareas.filter((elementoTarea)=> elementoTarea !== nombreTarea);
    //actualizo el state
    setArrayTareas(arregloFiltrado)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formularioTarea">
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            className="me-2"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="info" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
