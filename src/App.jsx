import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center text-light display-3">Lista de tareas</h1>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
