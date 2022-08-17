import { Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';
import API from '../services/API'; // Importo la constante referente a la API
import axios from "axios"; // Importo Axios


const ListaUsuarios = () => { // Referente a listar los usuarios

  // Consigo los datos del hook personalizado llamándolo y pasándole la URL a la que quiero realizarla
  const {data, error, loading} = useFetch(API+"?listaUsuarios=1");
  
  if (loading) { // Compruebo que esté cargando los datos para mostrar el spinner
    return <Loading />;
  }
  
  if (error !== "") { // Compruebo que haya algún error para mostrarlo
    return <div className="alert alert-danger" role="alert">{error}</div>
  }

  /**
   * Realiza una petición a la API y al server para eliminar el usuario indicado 
   * @param {*} id La ID del usuario
   */
  function eliminarUsuario(id){
    axios.post(API+"?eliminarUsuario="+id);
    window.location.reload(); // Recargo la página para que se muestren los datos actualizados
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
              <tr key={item.id}> {/* Uso los nombres de los campos en la BBDD MySQL */}
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