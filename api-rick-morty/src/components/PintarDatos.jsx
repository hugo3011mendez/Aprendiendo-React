import { useState, useEffect } from "react"; // Importaciones de hooks
import Swal from 'sweetalert2' // Importo el paquete de Sweet Alert 2 que he instalado previamente en el proyecto
import Personaje from "./Personaje"; // Importo el componente referente a la carta de un personaje

const PintarDatos = ({nombrePersonaje}) => { // Recojo el prop desde App.jsx

    // Hook referente a los datos de los personajes que devuelve la petición a la API
    const [personajes, setPersonajes] = useState([]);

    /**
     * Realizo la petición a la API cada vez que cambie el nombre del personaje a buscar
     */
    useEffect(() => {
        consumirAPI(nombrePersonaje);
    }, [nombrePersonaje]);

    /**
     * Realiza la petición a la API y muestra la respuesta
     * @param {*} nombre El nombre del personaje que queremos buscar
     */
    const consumirAPI = async(nombre) => {
        try {
            // Realizo una petición a la API con esta URL y usando el prop referente al nombre a buscar
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);

            // Compruebo si el campo OK de la respuesta es falso, lo que indica que la consulta no estará bien
            if (!respuesta.ok) { // Se puede hacer tanto con el campo OK como con el campo status, que indica el código de la respuesta (404 si no lo encontró)
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1000
                });
                
            }

            const datos = await respuesta.json(); // Así consigo los datos que me devuelve la petición
            setPersonajes(datos.results); // Actualizo la info del hook con los datos que devuelve la petición
        }
        catch (error) {
            console.log(error);
        }
        finally {
            
        }
    }

    return (
        <div className="row mt-2">
            {   
                personajes.map(item =>( // Recorro los personajes devueltos en la respuesta
                    <Personaje key={item.id} personaje={item} /> // Y muestro el componente de cada uno pasando como prop el propio item
                ))
            }
        </div>
    );
}

export default PintarDatos