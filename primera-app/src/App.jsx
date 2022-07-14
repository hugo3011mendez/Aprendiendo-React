// Componente principal que recibirá otros componentes
// Escribiendo rafce se escribirá toda la estructura necesaria para empezar con el componente de React, eliminando el import

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
    
    return (
        // Llamo a variables escribiéndolas entre llaves
        <div> 
            {/* Implemento la primera variable establecida */}
            <h2 className={clasesObjeto.primary}>{saludo}</h2>

            {/* Renderizado condicional : */}
            {/* Si la variable es true se mostrará Online y en verde, si es false se mostrará Offline y rojo */}
            {user ? <SaludoBienvenida/> : <SaludoDespedida/>} {/* Así puedo llamar a funciones */}

            <ul> {/* Listo el array creado en una ul */}
                {/* React usa el key prop para crear una relación entre el componente y el elemento DOM */}
                {/* La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no */}
                {/* No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática */}
                {frutas.map((fruta, index)=>(
                    <li key={fruta}> {index + 1} - {fruta} </li>
                ))}
            </ul>
        </div>
    );
};

export default App