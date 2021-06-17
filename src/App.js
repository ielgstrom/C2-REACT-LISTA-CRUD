import { useState } from "react";
import { Listado } from "./Componentes/Listado";

function App() {
  const [datos, setDatos] = useState([
    "El rojo",
    "Uno que vi",
    "El de la vecina",
  ]);

  return <Listado datos={datos} setDatos={setDatos} />;
}

export default App;
