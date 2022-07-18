import { useState } from "react"; // Importamos el hook

const Formulario = () => {

  const [todo, setTodo] = useState({
    // Los nombres tienen que ser iguales a los name de los elementos
    // Aquí establezco los valores iniciales por defecto de estas variables
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false
    // Estos valores cambian cada vez que se lance el evento al que están enlazados
  });

  // Función manejadora que determinará las acciones a realizar cuando se lance el evento onSubmit
  const handleSubmit = e => {
    e.preventDefault();
    console.log(todo);
  };

  // Función manejadora que determinará las acciones a realizar cuando se lance el evento onChange
  const handleChange = e => {
    const {name, type, value, checked} = e.target; // Me ahorro acceder todo el rato a e.target estableciendo sus valores en variables

    setTodo(
      // Uso las llaves para indicar que estoy devolviendo un objeto
      // Hago una ternaria para que devuelva el atributo checked cuando se reciba de un checkbox
      {...todo, [name]: type === "checkbox" ? checked : value}
    ); // Uso los corchetes para que pueda pillar el valor del nombre de la variable a cambiar
  }

  
  return (
    <> {/* Uso un Fragment */}
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
        <input
          type="text"
          name="todoName"
          placeholder="Escribe el nombre del Todo"
          className="form-control mb-2" 
          onChange={handleChange}
          value={todo.todoName}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <textarea
          name="todoDescripcion"
          placeholder="Escribe la descripción del Todo"
          className="form-control mb-2"
          defaultValue="Descripción de la Tarea 1"
          onChange={handleChange}
          value={todo.todoDescripcion}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
          onChange={handleChange}
          value={todo.todoEstado}
        > {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

          <option value="pendiente">Pendiente</option>
          <option value="finalizada">Finalizada</option>

        </select>

        {/* Checkbox : */}
        <div className="form-check">
          <input name="todoCheck" className="form-check-input" type="checkbox" id="check1" onChange={handleChange} checked={todo.todoCheck}/>
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