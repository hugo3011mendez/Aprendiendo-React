const Tarea = ({tarea, eliminarTarea, editarTarea}) => { // Consigo los props necesarios para el funcionamiento de este componente
  return (
    <> {/* Meto un li con los estilos de Bootstrap y modifico la info para que salga la correspondiente a la tarea */}
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{tarea.txtNombre} ({tarea.estado ? "Finalizada" : "Pendiente"})</div>
                <p>{tarea.txtDescripcion}</p>
                <div>
                    {/* Uso una función de flecha para asignarle al onClick porque sino se ejecutaría sin que el evento se lanzara */}
                    <button className="btn btn-danger me-2" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    <button className="btn btn-warning" onClick={() => editarTarea(tarea.id)}>Editar</button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {tarea.cbPrioridad && "Prioritaria"}
            </span>
        </li> 
    </>
  )
}

export default Tarea