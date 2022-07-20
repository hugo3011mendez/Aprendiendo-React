import { useState } from "react"
import Formulario from "./Formulario" // Importo el componente Formulario

const TodoList = () => {

  // Hook para el array de tareas que usará este componente
  const [tareas, setTareas] = useState([]);

  /**
   * Añade una tarea al array de tareas que este componente maneja
   * @param {*} tarea Tarea que se añadirá al array de tareas
   */
  const agregarTarea = tarea => {
    setTareas((old) => [...old, tarea]);
  }

  return (
    <>
      <Formulario agregarTarea={agregarTarea} /> {/* Muestro el Formulario con la función de agregar tarea indicada */}

      {
        tareas.map((item) => ( // Listo las tareas que hay en el array
          <li key={item.id}>{item.txtNombre}</li> // Muestro un li con el ID de la tarea como key y su nombre
        ))
      }
    </>
  )
}

export default TodoList