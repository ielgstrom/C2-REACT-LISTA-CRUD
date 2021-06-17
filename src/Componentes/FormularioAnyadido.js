import { useState } from "react";
export const FormularioAnyadido = (props) => {
  const { setDatos } = props;
  const [estado, setEstado] = useState(true);
  const [anyadido, setAnyadido] = useState("");
  const nuevoValor = (e) => {
    e.preventDefault();
    return setEstado(!estado);
  };

  //FUNCION QUE AÑADE LOS DATOS AL ARRAY DE DATOS
  const anyadeValor = (e) => {
    e.preventDefault();
    setDatos((datos) => [...datos, anyadido]);

    return setEstado(!estado);
  };

  return (
    <>
      <p
        className={estado ? "novisible" : "visible"}
        onClick={(e) => nuevoValor(e)}
      >
        +
      </p>
      <form className={estado ? "visible" : "novisible"}>
        <input
          type="text"
          onChange={(anyadido) => setAnyadido(anyadido.target.value)}
          required
        />
        <button onClick={(e) => anyadeValor(e)}>Añadir</button>
      </form>
    </>
  );
};
