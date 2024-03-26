import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  useEffect(() => {
    //localStorage.setItem('tareasLocal', JSON.stringify(arrayTareas))
    fetch('https://lista-tareas-backend-gsm4.vercel.app/api/todos')
      .then((res) => res.json())
      .then(data => {
        setArrayTareas(data)
        location.href = '/'
      })
  }, [tarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar el state tarea en el arrayTareas
    // spread ...
    fetch('https://lista-tareas-backend-gsm4.vercel.app/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        todo: tarea
      })
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        console.log(arrayTareas)
      })
    //limpiar el formulario
    setTarea('');
  };

  const borrarTarea = (id) => {
    //borramos una tarea
    fetch(`https://lista-tareas-backend-gsm4.vercel.app/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        
        alert(data.message)
        setTarea('')
        location.href = "/"
      })
    //actualizo el state
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
