import React from 'react'

const ListaUsuarios = () => { // Referente a listar los usuarios
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
            <tr>
                <th scope="row">1</th>
                <td>hugo@gmail</td>
                <td>Red</td>
                <td>1234</td>
                <td>2</td>
                <td> {/* Botones referentes a acciones que podremos hacer con un usuario */}
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning">Editar</button>
                    <button type="button" className="btn btn-danger ms-1">Borrar</button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default ListaUsuarios