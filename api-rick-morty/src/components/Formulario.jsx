import { useFormulario } from "../hooks/useFormulario" // Importo el custom hook
import Swal from 'sweetalert2' // Importo el paquete de Sweet Alert 2 que he instalado previamente en el proyecto

const Formulario = ({setNombrePersonaje}) => { // Recojo los props
    // Uso el custom hook
    const [inputs, handleChange, reset] = useFormulario({
        nombre: ""
    }); // Este objeto hace referencia al objeto initialState

    const {nombre} = inputs; // Destructuro el array de inputs con el input del nombre

    /**
     * Controla el evento onSubmit
     * @param {*} e Evento onSubmit
     */
    const handleSubmit = e => {
        e.preventDefault();

        if (!nombre.trim()) { // Compruebo si se ha escrito algo en el campo referente al nombre
            Swal.fire({
                title: 'Error!',
                text: 'Escribe algo en el campo de texto',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
        }
        else{ // Si se ha escrito algo, establezco el nombre y reinicio el form
            // Establezco el nombre del personaje a buscar, sin espacios al principio o al final y en minúsculas
            setNombrePersonaje(nombre.trim().toLowerCase());
            reset();
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Conseguir info de personaje</h2>

        <input type="text" name="nombre" className="form-control mb-2" placeholder="Escribe el nombre del personaje" value={nombre} onChange={handleChange} />
        <button type="submit" className="btn btn-dark">Enviar</button>
    </form>
  )
}

export default Formulario