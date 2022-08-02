import { useParams } from "react-router-dom" // Importación necesaria para recoger la info del post del blog
import { useFetch } from "../hooks/useFetch"; // Importo el hook personalizado
import Loading from "../components/Loading"; // Importo el componente referente a la carga de los datos

const BlogPost = () => {

    let params = useParams(); // Así recojo todos los parámetros en la URL
    // Consigo los datos del hook personalizado, llamando a la URL de la API con el parámetro recogido
    const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    // Copio y pego desde Blog las comprobaciones de loading y error
    if (loading) {
        return <Loading />;
    }
      
    if (error !== "") {
        return <h2>{error}</h2>
    }
    

  return (
    <div className="container">
        {/* Establezco estos atributos porque son los indicados en la API */}
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default BlogPost