import { useState } from "react" // Importación del hook de React

/**
 * Hook personalizado que permite guardar items en el almacenamiento local del navegador
 * 
 * @param {*} key Nombre que tendrá el item en el almacenamiento local
 * @param {*} defaultValue Dato que contendrá el item en el almacenamiento local
 * 
 * @returns Un array con el valor guardado en el almacenamiento local y su función que lo establece
 */
export const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Guardo en esta variable el item guardado en el localStorage con el nombre indicado por el prop
            const value = localStorage.getItem(key);

            if (value) { // Compruebo si el valor de dicho item existe
                return JSON.parse(value); // Y devuelvo el valor parseado en caso afirmativo
            }
            else{ // En caso negativo, establezco el item en el localStorage con el nombre como key
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue; // Y devuelvo el valor por defecto indicado por el prop
            }
        } catch (error) { // Si ocurre algún error
            return defaultValue; // Devuelvo el valor por defecto indicado por el prop
        }
    });

    const setValue = newValue => { // Para establecer el valor del item en el localStorage
        try {
            localStorage.setItem(key, JSON.stringify(newValue)); // Establezco el item según el nuevo valor
        } catch (error) {
            console.log(error); // Si ocurre algún error, lo muestro en la consola
        }

        setStoredValue(newValue); // Y finalmente establezco el valor del item en el localStorage
    };

  return [storedValue, setValue]; // Devuelvo el valor en el localStorage y la función para establecerlo
};

export default useLocalStorage;


/**
 * FORMAS DE USO :
 * 
 * - Cómo guardar un item en el localStorage :
 * const [mensaje, setMensaje] = useLocalStorage("mensaje", "Hello World"); // Los parámetros son el nombre del item y su valor por defecto
 * Así establecemos un item en el localStorage y obtenemos en nuestro componente una variable para usar su valor, y una función que lo establece
 */