import { useRef } from "react";

const Formulario = () => {

    const [todo, setTodo] = useState({});

  return (
    <> {/* Uso un Fragment */}
      <h2>Formulario Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
          <input 
              type="text"
              name="todoName"
              placeholder="Escribe el nombre del Todo"
              className="form-control mb-2" 
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

export default Formulario