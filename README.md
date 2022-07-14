# Aprendiendo React
- [Página desde la que haré el curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-01-react/#planificacion)
- [Primer vídeo de la lista que sigo para el curso de React](https://www.youtube.com/watch?v=WMHOE6RcHlY)


## Requisitos
- [Extensión de VS Code para React](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Instalar Node.js](https://nodejs.org/es/) para usar NPM


## Create React App
- Comandos para crear un proyecto en React
    - `npx create-react-app nombre-de-app`
    - `cd nombre-de-app`
    - `npm start`


## Info Importante
- React está basado en componentes, lo que significa que podemos separar el código de varias partes que se usen en una página web

- package.json
    - En este archivo se especifican las versiones de los módulos que usa el proyecto
    - Se ejecutarán los scripts de este archivo cuando ejecutemos `npm run start` en la terminal

- Carpeta node.modules
    - En esta carpeta se encuentran los módulos que usa el proyecto

- Para descargar/instalar los módulos que usará el proyecto (node_modules) escribiremos en la terminal : `npm i`

- Carpeta public
    - Contiene archivos estáticos que tiene la aplicación por defecto
    - En index.html se ejecutará el código de index.js

- Carpeta src
    - En index.js se concentrarán todos los componentes React de la página
    - App.js es un componente de React en este caso

- JSX (JavaScript XML)
    - Permite ejecutar código de JavaScript dentro y trabaja con etiquetas XML
    - Gracias a la extensión, escribiendo `rafce` se escribirá toda la estructura necesaria para empezar con el componente de React, eliminando el import
    - Para llamar o referirse a variables y hacer comentarios hay que hacerlo entre llaves {}
    - Para llamar a funciones hay que hacerlo como si fueran etiquetas : <Componente/>

    - Funciones :
        - La nomenclatura de las funciones empieza por mayúscula

    - Arrays y Keys :
        - Para arrays, React usa el key prop para crear una relación entre el componente y el elemento DOM
        - No se recomienda utilizar el índice de una matriz como key si sabe que la matriz no será estática

    - Eventos :
        - Los eventos se se nombran usando camelCase, en vez de minúsculas
        - Con JSX se pasa una función dentro de una lambda como el manejador del evento, en vez de un string
    
    - Componentes :
        - App.jsx debe estar en el mismo nivel de estructura de carpetas que index.js
        - Se recomienda crear una carpeta dentro de src para los diferentes componentes
    
    - Fragments :
        - return() sólo permite devolver un elemento, si queremos devolver más tendremos que usar Fragments
        - Podemos escribir `<React.Fragment>` y `</React.Fragment>`, o simplemente escribir `<>` y `</>` que funcionará igual
    
    - Props :
        - Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto
        - Son de sólo lectura, no se pueden modificar en el componente en el que los vamos a usar

    - Estados / Hooks :
        - Permiten a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa
        - **Se deben usar cada vez que se quiera hacer algo dinámico**
        - No funcionan dentro de las clases, te permiten usar React sin clases
        - Un estado o hook que modifica el estado de un componente para que cuando un valor cambie gracias a acciones del usuario se renderice
        - *useState()* declara una variable de estado, este tipo de variables son conservadas por React y su único argumento es el estado inicial
        - *useState()* devolverá una pareja de valores : el estado actual y la función que lo actualiza
        - 