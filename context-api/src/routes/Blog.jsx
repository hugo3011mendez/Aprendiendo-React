import { useEffect } from 'react'; // Importación de hooks
import { Link, useSearchParams } from 'react-router-dom'; // Elementos importados de React Router
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  // Hook para establecer parámetros de búsqueda
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => { // Se ejecuta cada vez que cambien los parámetros de búsqueda
    console.log(searchParams.get("id")); 
  }, [searchParams]);

  /**
   * Controla los cambios en el campo de texto para buscar las entradas del blog
   * @param {*} e Evento OnChange que recibe
   */
  const handleChange = e => {
    let filter = e.target.value; // Recojo el valor del atributo filter en la URL
    if (filter) { // Compruebo si existe
      setSearchParams({filter}); // En caso afirmativo, lo establezco el parámetro de búsqueda llamado filter
    }
    else{
      setSearchParams({}); // En caso negativo, establezco un objeto vacío al parámetro de búsqueda
    }
  };

  // Consigo los datos del hook personalizado llamándolo y pasándole la URL a la que quiero realizarla
  const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) { // Compruebo que esté cargando los datos para mostrar el spinner
    return <Loading />;
  }
  
  if (error !== "") { // Compruebo que haya algún error para mostrarlo
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Blog</h1>
      {/* El valor que se actualice será el del atributo filter en la URL, y si no existe estará vacío */}
      <input type="text" name="txtSearch" className='form-control mb-2' value={searchParams.get("filter") || ""} onChange={handleChange} />
      {
        data.filter(item => { // Filtro el array de posts para mostrar
          let filter = searchParams.get("filter"); // Consigo el valor del filtro
          if (!filter) return true; // Si no existe el filtro, devuelvo true

          let title = item.title.toLowerCase(); // Si existe el filtro, consigo el título
          return title.startsWith(filter.toLowerCase()); // Devuelve un booleano según si el título comienza por lo escrito en el filtro
        }).map(item => ( // Itero el array de posts pasados por el filtro
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}> {item.id} - {item.title} </Link>
          </h4> // Utilizo estos atributos porque es así como están indicados en la API
        ))
      }
    </>
  )
}

export default Blog