import { useParams } from "react-router-dom" // Importación de hook de Router
import { useFetch } from "../hooks/useFetch"; // Hook personalizado referente a coger info de la API
import Loading from "../components/Loading"; // Componente personalizado referente a la carga de la info de la API
import FormularioEditar from "../components/FormularioEditar"; // Componente referente al formulario para editar un usuario


const EditUsuario = () => {
  let params = useParams(); // Recojo todos los parámetros en la URL
  const url = "https://localhost/PruebaReactConBBDD/?conseguirUsuario="+params.id; // Monto la URL

  // Consigo los datos del hook personalizado, llamando a la URL de la API con el parámetro recogido
  const {data, error, loading} = useFetch(url);

  // Copio y pego desde Blog las comprobaciones de loading y error
  if (loading) {
      return <Loading />;
  }

  if (error !== "") {
      return <h2>{error}</h2>
  }
  

  return (
    <>
      {
        data.map(item =>
          <div className="container" key={item.id}>
            <h1>Datos de {item.nickname}</h1>
            <FormularioEditar usuario={item} />
          </div>
        )
      }
    </>
  )
}

export default EditUsuario