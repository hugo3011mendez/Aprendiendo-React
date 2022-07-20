import { useState } from "react";
import Swal from 'sweetalert2'; // Importo el Sweet Alert 2
import { v4 as uuidv4 } from 'uuid'; // Importo UUID

const Formulario = ({agregarTarea}) => { // Enlazo el método de su componente padre como prop

    // Declaro una variable con los valores iniciales que deben tomar los elementos del form
    const initialState = { // Deben tener el mismo nombre que el atributo name de cada elemento
        txtNombre: "",
        txtDescripcion: "",
        estado: "pendiente",
        cbPrioridad: false
    };

    const [tarea, setTarea] = useState(initialState); // Declaro el hook para que TodoList obtenga los valores

    const {txtNombre, txtDescripcion, estado, cbPrioridad} = tarea; // Destructuración de los valores de la tarea


    /**
     * Función para controlar el evento onChange
     * @param {*} e Evento onChange
     */
    const handleChange = e => {
        const {name, value, checked, type} = e.target;

        setTarea(
            // Uso las llaves para indicar que estoy devolviendo un objeto
            // Hago una ternaria para que devuelva el atributo checked cuando se reciba de un checkbox
            {...tarea, [name]: type === "checkbox" ? checked : value}
        );
    };

    /**
     * Función para controlar el evento onSubmit
     * @param {*} e Evento onSubmit
     */
    const handleSubmit = e => { // Función para controlar el evento onSubmit
        e.preventDefault();

        if (!txtNombre.trim()) {
            e.target[0].focus(); // Pongo el foco en el input

            // Uso la función de Sweet Alert 2
            Swal.fire({ 
                title: 'Error!', // Título de la alerta
                text: '¡El nombre de la tarea está vacío!', // Descripción de la alerta
                icon: 'error', // Icono de la alerta
                // Lo dejo sin texto en el botón de confirmación, para que éste no aparezca
            });

            return; // Sino, seguiría ejecutándose el código
        }

        if (!txtDescripcion.trim()) {
            e.target[1].focus(); // Pongo el foco en el textarea

            // Uso Sweet Alert 2
            Swal.fire({ 
                title: 'Error!',
                text: '¡La descripción de la tarea está vacía!',
                icon: 'error',
            });

            return; // Sino, seguiría ejecutándose el código
        }

        // Acción a realizar cuando pasa todas las validaciones
        Swal.fire({ 
            title: 'Éxito',
            text: '¡La tarea ha sido añadida!',
            icon: 'success', // Icono de éxito de la alerta Sweet Alert 2
        });

        agregarTarea({ // Agrego la tarea validada al array de tareas de su componente padre, gracias a haber pasado la función como prop
            txtNombre,
            txtDescripcion,
            estado: estado === "pendiente" ? false : true, // Compruebo el valor del estado para mandar un booleano
            cbPrioridad,
            id: uuidv4() // Uso el paquete UUID para darle una ID única a la tarea
        });

        setTarea(initialState); // Así, después de haber añadido una tarea con éxito, reinicio los campos del formulario
    };

  return (
    <>
        <h3>Añadir Tarea</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-2" name="txtNombre" placeholder="Nombre de la Tarea" value={txtNombre} onChange={handleChange} />

            <textarea name="txtDescripcion" className="form-control mb-2" placeholder="Descripción de la Tarea" value={txtDescripcion} onChange={handleChange} />

            <select name="estado" className="form-control mb-2" value={estado} onChange={handleChange} >
                <option value="pendiente">Pendiente</option>
                <option value="finalizada">Finalizada</option>
            </select>

            <div className="form-check"> {/* En el caso del checkbox es el atributo checked */}
                <input name="cbPrioridad" className="form-check-input" type="checkbox" checked={cbPrioridad} onChange={handleChange} />
                <label className="form-check-label" htmlFor="cbPrioridad">
                    Dar Prioridad
                </label>
            </div>

            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
    </>
  )
}

export default Formulario