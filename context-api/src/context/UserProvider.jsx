import { createContext, useState } from 'react'

export const UserContext = createContext();

// Contexto referente al usuario
const UserProvider = (props) => { // Los demás componentes que estemos viendo accederán aquí

  const [user, setUser] = useState(false); // Por defecto está en falso
  // Funciones referentes al inicio y al cierre de sesión del usuario
  const signIn = () => {
    setUser(true);
  };
  const signOut = () => {
    setUser(false);
  };

  return (
    <div>
        <UserContext.Provider value={{user, signIn, signOut}}>
          {props.children} {/* Meto a los demás componentes en el Provider */}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider