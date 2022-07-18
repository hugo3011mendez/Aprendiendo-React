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

  const [error, setError] = useState(false); // Un hook referente al error, por defecto a false

  // Función manejadora que determinará las acciones a realizar cuando se lance el evento onSubmit
  const handleSubmit = e => {
    e.preventDefault();

    const {todoName, todoDescripcion, todoEstado, todoCheck} = todo;
    
    if (!todoName.trim() || !todoDescripcion.trim() || !todoEstado.trim()) {
      setError(true); // Cambio el error a true ya que hay espacios vacíos
      console.log("ERROR : Hay datos vacíos");
    }
    else{
      setError(false); // Cambio el error a false ya que los datos están bien puestos
      console.log("¡Todo validado!");
      console.log("Nombre : " + todoName);
      console.log("Descripción de " + todoName + " : " + todoDescripcion);
      console.log("Estado de " + todoName + " : " + todoEstado);
      console.log(todoCheck ? todoName + " es una prioridad" : todoName + " no es una prioridad"); // Meto una ternaria para que se muestre un mensaje más claro por consola
    }
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

  // Creo un nuevo componente pequeño, referente a mostrar el error
  const PintarError = () => (
    <div className="alert alert-danger"  role="alert">Todos los campos son obligatorios</div>
  );


  return (
    <>
      <h2>Formulario Controlado</h2>

      {/* Compruebo si existe algún error con el hook, y en caso afirmativo pinto el mensaje */}
      {error && <PintarError />} {/* Con '&&' se hace una ternaria con sólo el caso afirmativo */}

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
          onChange={handleChange}
          value={todo.todoDescripcion}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <select
          name="todoEstado"
          className="form-control mb-2"
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