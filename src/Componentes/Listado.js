import { FormularioAnyadido } from "./FormularioAnyadido";

export const Listado = (props) => {
  const { datos, setDatos } = props;
  const enseñarDatos = () => {
    console.log("clicado en el dato");
  };

  //Aqui vamos a hacer la funcion de eliminar el elemento de la lista, si no me quedo dormido haciendolo
  const eliminarElemento = (gato) => {
    setDatos((datos) => datos.filter((e) => e !== gato));
  };

  return (
    <div className="contenedor">
      <h1>Listado de nombres de gatos</h1>
      <ul>
        {datos.map((dato, i) => (
          <div key={"div_" + dato} className="containerAgain">
            <li className="linea" key={"li_" + dato} onClick={enseñarDatos}>
              {dato}
            </li>
            <span
              onClick={() => eliminarElemento(dato)}
              key={"span_" + dato}
              className="linea borrar"
            >
              &emsp;&emsp;&emsp; Borrar
            </span>
          </div>
        ))}
        <FormularioAnyadido datos={datos} setDatos={setDatos} />
      </ul>
    </div>
  );
};
