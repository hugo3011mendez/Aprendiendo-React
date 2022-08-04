import { useContext } from 'react' // Importaciones de hooks
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider'; // Importo el contexto del usuario

const VerificarUsuario = ({children}) => { // Los demás componentes que estemos viendo accederán aquí
    const {user} = useContext(UserContext); // Consigo la info del usuario

    if (!user) { // Si el usuario no está autenticado, volverá a la ruta de inicio
        return <Navigate to="/" />
    }
    else{ // Si el usuario está autenticado, devolverá 
        return children;
    }
}

export default VerificarUsuario