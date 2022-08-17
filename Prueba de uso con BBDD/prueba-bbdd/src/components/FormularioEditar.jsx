import { useState } from "react"; // Importamos el hook de React
import { useFormulario } from "../hooks/useFormulario"; // Importamos el hook personalizado
import API from '../services/API'; // Importo la constante referente a la API
import axios from "axios"; // Importo Axios


const FormularioEditar = ({usuario}) => {

  // Declaro una variable con los valores iniciales que deben tomar los elementos del form
  const initialState = { // Deben tener el mismo nombre que el atributo name de cada elemento
    txtEmail: usuario.email,
    txtNickname: usuario.nickname,
    txtPassword: usuario.pwd,
    rol: null
  };

  const [error, setError] = useState(false); // Un hook referente al error, por defecto a false
  
  const [inputs, handleChange, reset] = useFormulario(initialState); // Uso el hook personalizado en Utils
  const {txtEmail, txtNickname, txtPassword, rol} = inputs; // Destructuración de los valores de los inputs


  /**
    * Función para controlar el evento onSubmit
    * @param {*} e Evento onSubmit
    */
  const handleSubmit = e => {
    e.preventDefault();
    
    if (!txtEmail.trim() || !txtNickname.trim() || !txtPassword.trim() || rol == null) {
      setError(true); // Cambio el error a true ya que hay espacios vacíos
    }
    else{     
      // Defino el cuerpo del mensaje que le mandaré a la API con los datos editados
      // Añado el campo ID para la misma y el campo flag para saber si la contraseña ha sido editada
      const datosEnviar = {"id":parseInt(usuario.id), "txtEmail":txtEmail, "txtNickname":txtNickname, "txtPassword":txtPassword, "rol":parseInt(rol), "flag":txtPassword===usuario.pwd?false:true};
      const cuerpo = JSON.stringify(datosEnviar);
      // Realizo la petición a la API
      axios.post(API+"?actualizarUsuario=1", cuerpo);
    }
  };

  // Creo un nuevo componente pequeño, referente a mostrar el error
  const PintarError = () => (
    <div className="alert alert-danger" role="alert">Todos los campos son obligatorios</div>
  );


  return (
    <>
      {/* Compruebo si existe algún error con el hook, y en caso afirmativo pinto el mensaje */}
      {error && <PintarError />} {/* Con '&&' se hace una ternaria con sólo el caso afirmativo */}

      <form onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
        <input
          type="text"
          name="txtEmail"
          className="form-control mb-2" 
          onChange={handleChange}
          value={txtEmail}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <input
          type="text"
          name="txtNickname"
          className="form-control mb-2"
          onChange={handleChange}
          value={txtNickname}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <input
          type="password"
          name="txtPassword"
          className="form-control mb-2"
          onChange={handleChange}
          value={txtPassword}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        {/* Radio Buttons referentes al rol del usuario : */}
        <div className="form-check">
          <input className="form-check-input" type="radio" name="rol" id="rol1" value={1} onChange={handleChange} />
          <label className="form-check-label" htmlFor="rol1">
            Usuario
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="rol" id="rol2" value={2} onChange={handleChange} />
          <label className="form-check-label" htmlFor="rol2">
            Administrador
          </label>
        </div>

        <button type="submit" className="btn btn-warning">Editar</button>
      </form>
    </>
  )
}

export default FormularioEditar