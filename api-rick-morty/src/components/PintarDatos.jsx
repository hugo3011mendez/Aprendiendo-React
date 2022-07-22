import { useState, useEffect } from "react"; // Importaciones de hooks
import Swal from 'sweetalert2' // Importo el paquete de Sweet Alert 2 que he instalado previamente en el proyecto
import Personaje from "./Personaje"; // Importo el componente referente a la carta de un personaje
import Loading from "./Loading"; // Importo el componente referente a el spinner animación de carga

const PintarDatos = ({nombrePersonaje}) => { // Recojo el prop desde App.jsx

    // Hook referente a los datos de los personajes que devuelve la petición a la API
    const [personajes, setPersonajes] = useState([]);

    const [loading, setLoading] = useState(false); // Otro hook para estbalecer si se está cargando la info

    /**
     * Realizo la petición a la API cada vez que cambie el nombre del personaje a buscar
     * Y además guardo el nombre del personaje en el almacenamiento local del navegador
     */
    useEffect(() => {
        consumirAPI(nombrePersonaje);
        if (nombrePersonaje !== "") { // Si el nombre del personaje no está vacío, que se actualice en la variable del local storage
            localStorage.setItem("nombrePersonaje", JSON.stringify(nombrePersonaje));            
        }
    }, [nombrePersonaje]);

    /**
     * Realiza la petición a la API y muestra la respuesta
     * @param {*} nombre El nombre del personaje que queremos buscar
     */
    const consumirAPI = async(nombre) => {
        setLoading(true); // Establezco que empiece el spinner

        try {
            // Realizo una petición a la API con esta URL y usando el prop referente al nombre a buscar
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);

            // Compruebo si el campo OK de la respuesta es falso, lo que indica que la consulta no estará bien
            if (!respuesta.ok) { // Se puede hacer tanto con el campo OK como con el campo status, que indica el código de la respuesta (404 si no lo encontró)
                localStorage.setItem("nombrePersonaje", JSON.stringify("")); // Actualizo el valor del almacenamiento local a un string vacío

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
            setLoading(false); // Establezco para que se deje de mostrar el spinner una vez se haya cargado todo
        }
    }

    if (loading) { // Si la info aún está cargando
        return <Loading />; // Muestro el spinner de carga
    }
    else{ // Si ya no está cargando la info
        return ( // Devuelvo la info correspondiente
            <div className="row mt-2">
                {   
                    personajes.map(item =>( // Recorro los personajes devueltos en la respuesta
                        <Personaje key={item.id} personaje={item} /> // Y muestro el componente de cada uno pasando como prop el propio item
                    ))
                }
            </div>
        );
    }
}

export default PintarDatos