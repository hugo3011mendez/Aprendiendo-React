import React from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  // Consigo los datos del hook personalizado llamándolo y pasándole la URL a la que quiero realizarla
  const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <Loading />;
  }
  
  if (error !== "") {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Blog</h1>
      {
        data.map(item => ( // Itero los datos recibidos
          <h4 key={item.id}>
            <Link> {item.id} - {item.title} </Link> {/* TODO : Seguir a partir de aquí */}
          </h4> // Utilizo estos atributos porque es así como están indicados en la API
        ))
      }
    </>
  )
}

export default Blog