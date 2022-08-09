import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';

const ListaUsuarios = () => { // Referente a listar los usuarios

  // Consigo los datos del hook personalizado llamándolo y pasándole la URL a la que quiero realizarla
  const {data, error, loading} = useFetch("https://localhost/PruebaReactConBBDD/");
  
  if (loading) { // Compruebo que esté cargando los datos para mostrar el spinner
    return <Loading />;
  }
  
  if (error !== "") { // Compruebo que haya algún error para mostrarlo
    return <h2>{error}</h2>
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
                    <button type="button" className="btn btn-warning">Editar</button>
                    <button type="button" className="btn btn-danger ms-1">Borrar</button>
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