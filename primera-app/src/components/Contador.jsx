import { useState } from "react"; // Importamos el hook

const Contador = () => {
    // Toma como elementos la variable y su modificador que puede tener el nombre que queramos, es la pareja de valores que devolverá useState()
    // Su único argumento es el estado inicial, su valor por defecto
    const [contador, setContador] = useState(0); // Así se renderizará la info actualizada por una acción del usuario
    
    /**
     * Aumenta el contador en 1 y muestra su valor en la consola
     */
    const aumentarContador= () => {
        setContador(contador + 1); // Así modificamos el contador
        console.log(contador);
    }

    
    // Cuando el usuario hace click, llamamos a setContador con un nuevo valor
    // React actualizará entonces el componente Contador pasándole el nuevo valor de contador
  return (
    <>
        <h3>Valor de Contador : {contador}</h3>
        <button className="btn btn-dark" onClick={aumentarContador}> {/* Asigno la función creada al evento del botón */}
            Aumentar
        </button>
    </>
  )
}

export default Contador