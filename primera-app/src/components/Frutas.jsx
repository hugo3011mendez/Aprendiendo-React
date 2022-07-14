// Componente dedicado a la lista de frutas
import React from 'react'; 

const Frutas = (props) => { // Recogemos los props que especificamos en App.jsx
    return (
        <> {/* Con un fragment puedo devolver más de un elemento. Ni siquiera tengo que escribir el nombre en la etiqueta */}
            <h4>Lista de frutas :</h4>
            <ul> {/* Listo el array creado en una ul */}
                {/* React usa el key prop para crear una relación entre el componente y el elemento DOM */}
                {/* La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no */}
                {/* No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática */}
                
                {/* Accedemos al array usando el nombre que le dimos al prop en App.jsx */}
                {props.frutasApp.map((fruta, index)=>(
                    <li key={fruta}> {index + 1} - {fruta} </li>
                ))}
            </ul>
        </>
    );
};

export default Frutas // Ahora queda meter este archivo en App.jsx