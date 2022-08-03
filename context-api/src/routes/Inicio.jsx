import { useContext } from 'react' // Importaciones de hooks
import { UserContext } from '../context/UserProvider'; // Importo el contexto

const Inicio = () => {
  // Consigo las variables del contexto
  const {user, signIn, signOut} = useContext(UserContext);

  return (
    <div>
      <h1>Inicio</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2> {/* Indica si está conectado */}

      { // Muestro un botón dependiendo del estado del usuario
        user ? (<button className="btn btn-danger" onClick={signOut}> Cerrar sesión </button>) 
        :
        (<button className="btn btn-primary" onClick={signIn}> Iniciar sesión </button>)
      }
    </div>
  )
}

export default Inicio