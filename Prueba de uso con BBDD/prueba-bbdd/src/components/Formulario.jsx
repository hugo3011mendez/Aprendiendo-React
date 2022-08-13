import { useState } from "react"; // Importamos el hook de React
import { useFormulario } from "../hooks/useFormulario"; // Importamos el hook personalizado

const Formulario = () => {

  // Declaro una variable con los valores iniciales que deben tomar los elementos del form
  const initialState = { // Deben tener el mismo nombre que el atributo name de cada elemento
    txtEmail: "",
    txtNickname: "",
    txtPassword: "",
    rol: null
  };

  const [error, setError] = useState(false); // Un hook referente al error, por defecto a false
  const [introducido, setIntroducido] = useState(false); // Un hook referente a si se acaba de introducir un usuario, por defecto a false
  
  const [inputs, handleChange, reset] = useFormulario(initialState); // Uso el hook personalizado en Utils
  const {txtEmail, txtNickname, txtPassword, rol} = inputs; // Destructuración de los valores de los inputs


  /**
    * Función para controlar el evento onSubmit
    * @param {*} e Evento onSubmit
    */
  const handleSubmit = e => {
    e.preventDefault();
    
    if (!txtEmail.trim() || !txtNickname.trim() || !txtPassword.trim()) {
      setIntroducido(false); // Pongo el introducido a false para que no se muestre la alerta
      setError(true); // Cambio el error a true ya que hay espacios vacíos
      console.log("ERROR : Hay datos vacíos");
    }
    else{     
      // Defino el cuerpo del mensaje que le mandaré a la API con los datos introducidos
      const datosEnviar = {"txtEmail":txtEmail, "txtNickname":txtNickname, "txtPassword":txtPassword, "rol":parseInt(rol)};
      const cuerpo = JSON.stringify(datosEnviar);
      // Me comunico con la API
      fetch("https://localhost/PruebaReactConBBDD/?registrarUsuario=1", {method:"POST", body:cuerpo})
      .then(res => res.json()) // Realizo la petición
      .catch(e => console.log(e)) // Si algo falla, muestro el mensaje de error

      setIntroducido(true); // Pongo la booleana a true
      reset(); // Al final de todo reinicio los campos
    }
  };

  // Creo un nuevo componente pequeño, referente a mostrar el error
  const PintarError = () => (
    <div className="alert alert-danger" role="alert">txts los campos son obligatorios</div>
  );

  // Creo un nuevo componente pequeño, referente a mostrar el error
  const PintarINSERT = () => (
    <div class="alert alert-success" role="alert">Se ha introducido el nuevo usuario con éxito</div>
  );


  return (
    <>
      <h2>Formulario Controlado</h2>

      {/* Compruebo si existe algún error con el hook, y en caso afirmativo pinto el mensaje */}
      {error && <PintarError />} {/* Con '&&' se hace una ternaria con sólo el caso afirmativo */}

      {/* Compruebo si se acaba de introducir un usuario con el hook, y en caso afirmativo pinto el mensaje */}
      {introducido && <PintarINSERT />} {/* Con '&&' se hace una ternaria con sólo el caso afirmativo */}

      <form onSubmit={handleSubmit}> {/* Le paso el hook a la referencia y le adjunto el evento onSubmit */}
        <input
          type="text"
          name="txtEmail"
          placeholder="Escribe el Email del nuevo usuario"
          className="form-control mb-2" 
          onChange={handleChange}
          value={txtEmail}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <input
          type="text"
          name="txtNickname"
          placeholder="Escribe el Nickname del nuevo usuario"
          className="form-control mb-2"
          onChange={handleChange}
          value={txtNickname}
        /> {/* Le asocio el evento onChange referenciando a su función manejadora y el valor a cambiar correspondiente */}

        <input
          type="password"
          name="txtPassword"
          placeholder="Escribe la constraseña del nuevo usuario"
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

        <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
    </>
  )
}

export default Formulario