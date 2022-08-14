import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
    <div className="container">
        <h1>ERROR : PÁGINA NO ENCONTRADA</h1>
        <h4>Quizás quisiste ir a alguna de estas páginas :</h4>
        <Link to="/" className="btn btn-warning">Inicio</Link>
        <Link to="/addProyecto" className="btn btn-warning ms-3">Añadir Usuario</Link>
    </div>
  )
}

export default PageNotFound