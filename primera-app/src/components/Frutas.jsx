// Componente dedicado a la lista de frutas

// Arrays y Keys :
const frutas = ["🍉", "🍌", "🍓"];

const Frutas = () => {
  return (
    <div>
            <ul> {/* Listo el array creado en una ul */}
            {/* React usa el key prop para crear una relación entre el componente y el elemento DOM */}
            {/* La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no */}
            {/* No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática */}
            {frutas.map((fruta, index)=>(
                <li key={fruta}> {index + 1} - {fruta} </li>
            ))}
            </ul>
    </div>
  )
}

export default Frutas