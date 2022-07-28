import { useState } from "react"; // Importamos el hook de React
import { useFormulario } from "../hooks/useFormulario"; // PENDIENTE DE CAMBIAR LA RUTA DE IMPORTACIÓN SI SE USA EN UN PROYECTO

const Formulario = () => {

  // Declaro una variable con los valores iniciales que deben tomar los elementos del form
  const initialState = { // Deben tener el mismo nombre que el atributo name de cada elemento
    txtNombre: "",
    txtDescripcion: "",
    estado: "pendiente",
    cbPrioridad: false
  };

  const [error, setError] = useState(false); // Un hook referente al error, por defecto a false

  const [inputs, handleChange, reset] = useFormulario(initialState); // Uso el hook personalizado en Utils
  const {txtName, txtDescripcion, txtEstado, cbCheck} = inputs; // Destructuración de los valores de los inputs


  /**
    * Función para controlar el evento onSubmit
    * @param {*} e Evento onSubmit
    */
  const handleSubmit = e => {
    e.preventDefault();
    
    if (!txtName.trim() || !txtDescripcion.trim() || !txtEstado.trim()) {
      setError(true); // Cambio el error a true ya que hay espacios vacíos
      console.log("ERROR : Hay datos vacíos");
    }
    else{
      setError(false); // Cambio el error a false ya que los datos están bien puestos
      console.log("¡txt validado!");
      console.log("Nombre : " + txtName);
      console.log("Descripción de " + txtName + " : " + txtDescripcion);
      console.log("Estado de " + txtName + " : " + txtEstado);
      console.log(cbCheck ? txtName + " es una prioridad" : txtName + " no es una prioridad"); // Meto una ternaria para que se muestre un mensaje más claro por consola
    }
  };

  // Creo un nuevo componente pequeño, referente a mostrar el error
  const PintarError = () => (
    <div className="alert alert-danger"  role="alert">txts los campos son obligatorios</div>
  );


  return (
    <>
      <h2>Formulario Controlado</h2>

      {/* Compruebo si existe algún error con el hook, y en caso afirmativo pinto el mensaje */}
      {error && <PintarError />} {/* Con '&&' se hace una ternaria con sólo el caso afirmativo */}

      <form onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
        <input
          type="text"
          name="txtName"
          placeholder="Escribe el nombre del txt"
          className="form-control mb-2" 
          onChange={handleChange}
          value={txt.txtName}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <textarea
          name="txtDescripcion"
          placeholder="Escribe la descripción del txt"
          className="form-control mb-2"
          onChange={handleChange}
          value={txt.txtDescripcion}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <select
          name="txtEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={txt.txtEstado}
        > {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

          <option value="pendiente">Pendiente</option>
          <option value="finalizada">Finalizada</option>

        </select>

        {/* Checkbox : */}
        <div className="form-check"> 
          <input name="cbCheck" className="form-check-input" type="checkbox" id="check1" onChange={handleChange} checked={txt.cbCheck}/>
          <label className="form-check-label" htmlFor="check1">
            Dar Prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
    </>
  )
}

export default Formulario