import Swal from 'sweetalert2'; // Importo el Sweet Alert 2
import { v4 as uuidv4 } from 'uuid'; // Importo UUID
import { useFormulario } from "../hooks/useFormulario"; // Importo el hook personalizado

const Formulario = ({agregarTarea}) => { // Consigo el método de su componente padre como prop

    // Declaro una variable con los valores iniciales que deben tomar los elementos del form
    const initialState = { // Deben tener el mismo nombre que el atributo name de cada elemento
        txtNombre: "",
        txtDescripcion: "",
        estado: "pendiente",
        cbPrioridad: false
    };

    // Cambio el hook useState por el hook personalizado que he creado, consigo las variables que devuelvo en él
    const [inputs, handleChange, reset] = useFormulario(initialState); 

    const {txtNombre, txtDescripcion, estado, cbPrioridad} = inputs; // Destructuración de los valores de la tarea


    /**
     * Función para controlar el evento onSubmit
     * @param {*} e Evento onSubmit
     */
    const handleSubmit = e => { // No meto esta función en el custom hook, porque no todos los forms se van a validar de esta manera
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

        reset(); // Reinicio los campos del formulario gracias al método en el hook personalizado
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
                    Prioritaria
                </label>
            </div>

            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
    </>
  )
}

export default Formulario