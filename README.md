# Aprendiendo React
- [Clase 1 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-01-react/)
- [Clase 2 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-02-react-formularios/)
- [Clase 3 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-03-react-todo/) 
- [Clase 4 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-04-react-api/) *Actualmente en esta*
- [Clase 5 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-05-react-router/)
- [Clase 6 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-06-react-context/)


## Requisitos
- [Extensión de VS Code para React](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Instalar Node.js](https://nodejs.org/es/) para usar NPM


## Recursos
- [React Developer Tools for Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Sweet Alert 2](https://sweetalert2.github.io/#download)
- [UUID](https://www.npmjs.com/package/uuid)
- [Netlify](https://app.netlify.com)


## Create React App
- Comandos para crear un proyecto en React
    - `npx create-react-app nombre-de-app`
    - `cd nombre-de-app`
    - `npm start`

- Para descargar/instalar los módulos que usará el proyecto (node_modules) escribiremos en la terminal : `npm i`

- En *public/index.html* podemos insertar Bootstrap si nos apetece

- Ahora se eliminan todos los archivos en la carpeta *src* excepto *index.js*, el que modificaremos quitando las rutas de los archivos que hemos eliminado

- Creamos *App.jsx* y escribiendo `rafce` establecemos el código del componente principal del proyecto

- Con `npm run build` compilamos todo el proyecto y se crea la carpeta *build* que se trata del entorno de producción del proyecto
    - Si el index.html de esa carpeta lo ejecutamos en un servidor, podrá funcionar todo tal cual como lo tenemos

- Después, en la página [Netlify](https://app.netlify.com) podemos desplegar un servidor web arrastrando la carpeta *build*, sólo sirve para pruebas, nada comercial


## Info Importante
- React está basado en componentes, lo que significa que podemos separar el código de varias partes que se usen en una página web

- package.json
    - En este archivo se especifican las versiones de los módulos que usa el proyecto
    - Se ejecutarán los scripts de este archivo cuando ejecutemos `npm run start` en la terminal

- Carpeta node.modules
    - En esta carpeta se encuentran los módulos que usa el proyecto

- Carpeta public
    - Contiene archivos estáticos que tiene la aplicación por defecto
    - En index.html se ejecutará el código de index.js

- Carpeta src
    - En index.js se concentrarán todos los componentes React de la página
    - App.js es un componente de React en este caso


## JSX (JavaScript XML)
- Permite ejecutar código de JavaScript dentro y trabaja con etiquetas XML

- Gracias a la extensión, escribiendo `rafce` se escribirá toda la estructura necesaria del componente de React, eliminando el import

- Para llamar o referirse a variables y hacer comentarios hay que hacerlo entre llaves {}

- Para llamar a funciones hay que hacerlo como si fueran etiquetas : <Componente/>

- Se pueden crear componentes dentro de otros escribiendo `const nuevoComponente = () => ();` y añadiéndolo en una etiqueta JSX al *return*

- Atributos :
    - El atributo `class` en HTML, en JSX es `className`
    - El atributo `for` en HTML, en JSX es `htmlFor`
    - En los checkbox, en vez del atributo `value` es mejor usar el atributo `checked`

- Funciones :
    - La nomenclatura de las funciones empieza por mayúscula

- Arrays y Keys :
    - Para arrays, React usa el key prop para crear una relación entre el componente y el elemento DOM
    - No se recomienda utilizar el índice de una matriz como key si sabe que la matriz no será estática

- Eventos :
    - Los eventos se se nombran usando camelCase, en vez de minúsculas
    - Con JSX se pasa una función dentro de una lambda como el manejador del evento, en vez de un string
    - Si le asignamos una función a un evento, hacerlo siempre con una lambda : `evento = {() => funcion()}`
    
- Componentes :
    - App.jsx debe estar en el mismo nivel de estructura de carpetas que index.js
    - Se recomienda crear una carpeta dentro de src para los diferentes componentes
    
- Fragments :
    - return() sólo permite devolver un elemento, si queremos devolver más tendremos que usar Fragments
    - Podemos escribir `<React.Fragment>` y `</React.Fragment>`, o simplemente escribir `<>` y `</>` que funcionará igual
    
- Props :
    - Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto
    - Son de sólo lectura, no se pueden modificar en el componente en el que los vamos a usar
    - En el componente que recoja los props, podemos escribir `{objeto}` en vez de `props`

- Estados / Hooks :
    - Permiten a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa
    - **Se deben usar cada vez que se quiera hacer algo dinámico**
    - No funcionan dentro de las clases, te permiten usar React sin clases
    - Un estado o hook que modifica el estado de un componente para que cuando un valor cambie gracias a acciones del usuario se renderice
    - `useState()` declara una variable de estado, este tipo de variables son conservadas por React y su único argumento es el estado inicial
    - `useState()` devolverá una pareja de valores : el estado actual y la función que lo actualiza
    - El hook `useRef()` se usa para las referencias y tendrá un argumento null
    - El hook `useEffect()` se ejecuta cada vez que se renderice el componente en el que se use
        - Se puede especificar que se ejecute sólo una vez, al cargar la página, escribiendo `[]` como segundo argumento de la función
        - Escribiendo una variable dentro de `[]` anteriormente mencionado, el hook se ejecutará cada vez que cambie dicha variable

- Hooks personalizados :
    - Por estándar, se suele crear una carpeta dentro de *src* llamada *hooks*, donde ahí crearemos nuestros custom hooks
    - Un custom hook puede ser un archivo de JavaScript, ya que no devolverá nada de JSX
    - Podemos generar la estructura del hook escribiendo el snippet `rafc`
    - En ellos se suele usar toda la lógica genérica para un tipo de componente (como por ejemplo, un formulario)
        - También se pueden incorporar funciones que controlen eventos y se puedan usar en más de un componente
    
- Formularios
    - En React, un <textarea> utiliza un atributo value para definir su texto
    - Se le asocia un evento onSubmit al formulario para especificar las acciones a realizar
    - La etiqueta <input type="file" /> **es un componente no controlado**
    - [React Hook Form](https://react-hook-form.com/) y [Formik](https://formik.org/) son herramientas útiles

- Formularios no controlados (Uncontrolled Forms) :
    - Los datos del formulario son manejados por el propio DOM
    - Para escribir un componente no controlado, se puede usar una referencia para obtener los valores del formulario desde el DOM
    - Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado
    - Para usar los elementos se recomienda usar referencias en vez de un *GetElementById()* o un *QuerySelector()*
    - Se usa el hook `useRef()` para recoger los datos del form 

- Formularios controlados (Controlled Forms) :
    - Los componentes React del formulario lo controlan con las entradas del usuario
    - Podremos controlar las entradas del usuario en tiempo real, usando nuevamente el hook `useState()`
    - Para conseguir los valores de los diferentes campos de una manera más fácil ahorrando espacio, podemos hacer `const {variable1, variable2} = objeto` **pero tienen que tener el mismo nombre que las variables originales**
    - Se reinician los datos del form declarando un objeto `initialState` con los valores iniciales del form y estableciéndolo como parámetro en el método `setObjeto` del hook `useState`


## [Sweet Alert 2](https://sweetalert2.github.io/#download)
- Es un paquete para instalar con NPM

- Se instala escribiendo el comando `npm install sweetalert2` en la terminal, dentro de la carpeta del proyecto

- Se importa escribiendo `import Swal from 'sweetalert2'`

- Uso :
    - Se basa en una función `Swal.fire()`
    - Dentro de la función hay varios atributos :
        - `title: 'Error!'` para el título de la alerta
        - `text: 'Do you want to continue'` para el texto que se mostrará en la alerta
        - `icon: 'error'` para el tipo de icono de la alerta, se pueden ver todos los iconos disponibles en la [documentación](https://sweetalert2.github.io/#usage)
        - `confirmButtonText: 'Cool'` para el texto que haya dentro del botón que cerrará la alerta, si se quiere que haya uno


## [UUID](https://www.npmjs.com/package/uuid)
- Es un paquete para instalar con NPM

- Se instala escribiendo el comando `npm install uuid` en la terminal, dentro de la carpeta del proyecto

- Se importa escribiendo `import { v4 as uuidv4 } from 'uuid';`

- Uso :
    - Simplemente usando la función `uuidv4()` proporciona el ID autogenerado