// Componente principal que recibirá otros componentes
// Escribiendo rafce se escribirá toda la estructura necesaria para empezar con el componente de React, eliminando el import

import Frutas from "./components/Frutas"; // Al escribir la etiqueta de Frutas, automáticamente crea el import
import Contador from "./components/Contador"; // Importe del componente Contador


const App = () => {
    const saludo = "Saludo desde variable!"; // Defino una variable

    const clasesObjeto = { // Para el tipo de texto según Bootstrap
        primary: "text-primary",
        success: "text-success",
        danger: "text-danger"
    };

    const user = true; // Indicando si un usuario está en línea

    // Al ser funciones, su nomenclatura empieza por mayúscula
    const SaludoBienvenida = () => <h2 className={clasesObjeto.success}>Online</h2>;
    const SaludoDespedida = () => <h2 className={clasesObjeto.danger}>Offline</h2>;

    // Arrays y Keys :
    const frutas = ["🍉", "🍌", "🍓"];

    // Eventos :
    const funcionClick = (nombre) => {console.log(nombre + " ha hecho click!");};
    
    
    return (
        // Llamo a variables escribiéndolas entre llaves
        <div className="container"> 
            <Contador/> {/* He importado el componente referente al contador */}

            {/* Implemento la primera variable establecida */}
            <h2 className={clasesObjeto.primary}>{saludo}</h2>

            {/* Renderizado condicional : */}
            {/* Si la variable es true se mostrará Online y en verde, si es false se mostrará Offline y rojo */}
            {user ? <SaludoBienvenida/> : <SaludoDespedida/>} {/* Así puedo llamar a funciones */}

            <Frutas frutasApp={frutas}/> {/* Añado el componente de frutas pasando el array como prop */}

            {/* Muestro un botón al que le asocio el evento onClick */}
            <button className="btn btn-primary" onClick={() => funcionClick("Hugo")}>Click Me</button>
        </div>
    );
};

export default App