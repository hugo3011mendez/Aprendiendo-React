import { useEffect, useState } from "react" // Importo los hooks que necesito
import Formulario from "./Formulario" // Importo el componente Formulario
import Tarea from "./Tarea"; // Importo el componente referente a una tarea individual

const TodoList = () => {

  const [tareas, setTareas] = useState([]); // Hook para el array de tareas que usará este componente

  // Este hook se ejecuta cada vez que el componente se renderice
  useEffect(() => {
    // Si existe un array de tareas guardado en el local storage
    if (localStorage.getItem("tareas")) {
      setTareas(JSON.parse(localStorage.getItem("tareas"))); // Establezco el array de tareas con la info existente en el local storage
    }
  }, []); // Estableciendo estos corchetes como argumento de la función, se ejecutará sólo cuando se cargue el componente

  

  /**
   * Añade una tarea al array de tareas que este componente maneja
   * @param {*} tarea Tarea que se añadirá al array de tareas
   */
  const agregarTarea = tarea => {
    setTareas((old) => [...old, tarea]);
  }

  /**
   * Elimina la tarea que tenga el ID que recibe como parámetro
   * @param {*} id El ID de la tarea que queremos eliminar
   */
  const eliminarTarea = (id) => {
    setTareas((old) => old.filter(item => item.id !== id));
  };

  /**
   * Edita una tarea, cambiando su estado
   * @param {*} id El ID de a tarea que queremos editar
   */
  const editarTarea = (id) => {
    const editarTareas = tareas.map((item) => // Esta variable se basa en una copia del array pero con el estado de la tarea en cuestión cambiado
      item.id === id ? {...item, estado: !item.estado} : item // Si la ID del item coincide, cambio su estado y devuelvo todo el objeto
    );

    setTareas(editarTareas); // Reemplazo todas las tareas con todo el array, con la tarea modificada
  };


  return (
    <>
      <Formulario agregarTarea={agregarTarea} /> {/* Muestro el Formulario con la función para agregar una tarea como prop */}

      <ul className="list-group list-group-numbered mt-2">
        {
          tareas.map((item) => ( // Listo las tareas que hay en el array
            // Paso como props la propia tarea, su función de eliminar, su función de editar
            <Tarea key={item.id} tarea={item} eliminarTarea={eliminarTarea} editarTarea={editarTarea} />
          ))
        }
      </ul>
    </>
  )
}

export default TodoList