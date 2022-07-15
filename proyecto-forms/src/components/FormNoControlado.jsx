import { useRef } from "react";

const FormNoControlado = () => {

  const formulario = useRef(); // Hook para la referencia del formulario

  // Función que determinará las acciones a realizar cuando se lance el evento onSubmit
  const handleSubmit = e => {
    e.preventDefault(); // Como en JS, prevengo la realización de las acciones por defecto

    const datos = new FormData(formulario.current); // Para poder llamar a los elementos del form se usa el atributo current

    // Meteré en este objeto todos los datos del array referentes a la propiedad y su valor correspondiente
    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos);

    // Estableciendo el mismo nombre que la key del array, puedo conseguir los valores directamente
    const {todoName, todoDescripcion, todoEstado} = objetoDatos

    // Compruebo que los datos no estén vacíos y muestro el resultado en la consola
    if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
      console.log("ERROR : Hay datos vacíos");
    }
    else{
      console.log("¡Todo validado!");
      console.log("Nombre : " + todoName);
      console.log("Descripción de " + todoName + " : " + todoDescripcion);
      console.log("Estado de " + todoName + " : " + todoEstado);
    }
  }


  return (
    <> {/* Uso un Fragment */}
      <h2>No Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
          <input 
              type="text"
              name="todoName"
              placeholder="Escribe el nombre del Todo"
              className="form-control mb-2"
              defaultValue="Tarea 1" 
          /> {/* Se pueden poner valores por defecto a los elementos */}

          <textarea 
            name="todoDescripcion"
            placeholder="Escribe la descripción del Todo"
            className="form-control mb-2"
            defaultValue="Descripción de la Tarea 1"
          />

          <select 
            name="todoEstado"
            className="form-control mb-2"
            defaultValue="pendiente"
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Finalizada</option>
          </select>

          <button type="submit" className="btn btn-primary">
            Añadir
          </button>
      </form>
    </>
  )
}

export default FormNoControlado