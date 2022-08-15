import { Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';

const ListaUsuarios = () => { // Referente a listar los usuarios

  // Consigo los datos del hook personalizado llamándolo y pasándole la URL a la que quiero realizarla
  const {data, error, loading} = useFetch("https://localhost/PruebaReactConBBDD/?listaUsuarios=1");
  
  if (loading) { // Compruebo que esté cargando los datos para mostrar el spinner
    return <Loading />;
  }
  
  if (error !== "") { // Compruebo que haya algún error para mostrarlo
    return <h2>{error}</h2>
  }

  /**
   * Realiza una petición a la API y al server para eliminar el usuario indicado 
   * @param {*} id La ID del usuario
   */
  function eliminarUsuario(id){
    const url = "https://localhost/PruebaReactConBBDD/?eliminarUsuario="+id; // Armo la URL
    // Me comunico con la API
    fetch(url)
    .then(res => res.json()) // Realizo la petición
    // .then(res => console.log(res.json())) // Realizo la petición
    .then((datosRespuesta) => {
      console.log(datosRespuesta); // Muestro los datos obtenidos en respuesta del server
      window.location.reload(); // Recargo la página para que se muestren los datos actualizados
    })
    .catch(e => console.log(e)); // Si algo falla, muestro el mensaje de error
  }

  return (
    <table className='table'>
        <thead>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Nickname</th>
            <th scope="col">Password</th>
            <th scope="col">Rol</th>
            <th scope='col'>Acciones</th>
        </thead>
        <tbody>
          { // Listo todos los usuarios que haya para que se muestren
            data.map(item => 
              <tr> {/* Uso los nombres de los campos en la BBDD MySQL */}
                <th scope="row">{item.id}</th>
                <td>{item.email}</td>
                <td>{item.nickname}</td>
                <td>{item.pwd}</td>
                <td>{item.rol}</td>
                <td> {/* Botones referentes a acciones que podremos hacer con un usuario */}
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to={"/editUsuario/"+item.id} className="btn btn-warning"> Editar </Link>
                    {/* Le asigno al evento onClick una función para eliminar el usuario de la BBDD */}
                    <button type="button" className="btn btn-danger ms-1" onClick={() => eliminarUsuario(item.id)}>Borrar</button>
                  </div>
                </td>
              </tr>              
            )
          }
        </tbody>
    </table>
  )
}

export default ListaUsuarios