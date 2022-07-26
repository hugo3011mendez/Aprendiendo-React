import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
    <div className="container">
        <h1>ERROR : PÁGINA NO ENCONTRADA</h1>
        <h4>Quizás quisiste ir a alguna de estas páginas :</h4>
        <Link to="/" className="btn btn-warning">Inicio</Link>
        <Link to="/blog" className="btn btn-warning ms-3">Blog</Link>
        <Link to="/contacto" className="btn btn-warning ms-3">Contacto</Link>
    </div>
  )
}

export default PageNotFound