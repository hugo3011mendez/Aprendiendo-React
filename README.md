# Aprendiendo React
- [Clase 1 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-01-react/)
- [Clase 2 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-02-react-formularios/)
- [Clase 3 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-03-react-todo/)
- [Clase 4 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-04-react-api/)
- [Clase 5 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-05-react-router/)
- [Clase 6 del curso de React](https://bluuweb.github.io/desarrollo-web-bluuweb/18-06-react-context/)
- [Vídeos para aprender a usar React con PHP y MySQL con el paquete Axios](https://www.youtube.com/playlist?list=PLCakfctNSHkFDTFczqhXNv-nYMHvLMT1H)

## Requisitos
- [Extensión de VS Code para React](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Instalar Node.js](https://nodejs.org/es/) para usar NPM


## Recursos
- [React Developer Tools for Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Sweet Alert 2](https://sweetalert2.github.io/#download)
- [UUID](https://www.npmjs.com/package/uuid)
- [Netlify](https://app.netlify.com)
- [API de Rick & Morty](https://rickandmortyapi.com/)
- [JSON Placeholder API](https://jsonplaceholder.typicode.com/)


## Proyectos subidos a [Netlify](https://app.netlify.com)
- [ToDo App](https://prueba-react-todo-app.netlify.app/)
- [API de Rick & Morty](https://prueba-react-api-rick-and-morty.netlify.app/)
- [Router v6](https://prueba-react-router-v6.netlify.app/)
- [Context API](https://prueba-react-context-api.netlify.app/)

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

- Si en Netlify no funcionan los parámetros en la URL, debemos crear dentro de la carpeta *public* el archivo *_redirects*
    - Y dentro de dicho archivo escribir el siguiente código : `/* /index.html 200`


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
    - La estructura será de la siguiente manera :
        - Carpeta *components* para los componentes personalizados
        - Carpeta *hooks* para los hooks personalizados
        - Carpeta *routes* para las rutas si se usa React Router DOM
        - Carpeta *context* para los archivos de los contextos si se usa `useContext`
        - Carpeta *services* para archivos de constantes


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
    - Cuando se muestre el componente al que le queremos pasar el prop, escribiremos `<Componente nombreVariableProp={variable} />`
    - En el componente que recoja los props, podemos escribir `{objeto}` en vez de `props`

- Estados / Hooks :
    - Permiten a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa
    - **Se deben usar cada vez que se quiera hacer algo dinámico**
    - No funcionan dentro de las clases, te permiten usar React sin clases
    - Un estado o hook que modifica el estado de un componente para que cuando un valor cambie gracias a acciones del usuario se renderice
    - `useState()` declara una variable de estado, este tipo de variables son conservadas por React y su único argumento es el estado inicial
        - Devolverá una pareja de valores : el estado actual y la función que lo actualiza
    - El hook `useRef()` se usa para las referencias y tendrá un argumento null
    - El hook `useEffect()` se ejecuta cada vez que se renderice el componente en el que se use
        - Se puede especificar que se ejecute sólo una vez, al cargar el componente, escribiendo `[]` como segundo argumento de la función
        - Escribiendo una  o más variables separadas por comas dentro del `[]` anteriormente mencionado, el hook se ejecutará cada vez que cambien dichas variables
        - Aunque se recomienda que se esriba un `useEffect()` por cada variable de la que queramos estar pendientes
        - Usando el snippet de `useEffect` vendrá un return con una función de saneamiento
    - El hook `useContext(Contexto)` se usa cuando se complica el uso de props para pasar datos entre componentes, es una forma de obtener datos de un lugar a otro
        - Está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React
        - Gracias a este hook se pueden recoger las variables del contexto en el que esté metido el componente donde se use
    - Una alternativa a `useContext` es **Redux**
        - Viene con un depurador que viaja en el tiempo
        - Proporciona una API de middleware que le brinda acceso a herramientas
        - Sus enlaces de React evitan muchos renderizados innecesarios
        - Si deseas una herramienta que te ayude a administrar su estado, Redux es una excelente opción
        - Redux también se puede usar con JavaScript nativo, es externo a React
        
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


## Usando APIs
- En este caso probaremos a recoger info de la [API de Rick & Morty](https://rickandmortyapi.com/)

- Para hacer solicitudes a una API :
    - Hay que hacer una función asíncrona `async() => {};` donde se realiza la petición a la API y se trata la respuesta obtenida
    - Después se puede jugar con los campos de la respuesta, comprobando diferentes datos
    - Para conseguir los datos se guarda en una variable la respuesta en formato JSON `respuesta.json()` y a partir de ahí se puede mostrar toda la info


## Router v6
- React Router es una biblioteca de enrutamiento de páginas web del lado del servidor y del cliente con todas las funciones para React, se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native

- De base, estaríamos trabajando con React Router v5 y podemos actualizar a React Router v6

- Para instalarla en el proyecto, se usará el comando `npm i react-router-dom@6` en la terminal

- Conectar con la URL del navegador :
    - Importo el BrowserRouter en *index.js* escribiendo `import { BrowserRouter } from "react-router-dom"`;
    - Añado la etiqueta `<BrowserRouter></BrowserRouter>`, dentro de ella irá `<App />`
    - La etiqueta `<Link></Link>` sirve de ancla en el DOM
        - En vez de con un *href*, con el atributo `to="/"` le indicamos la URL a la que debe ir
        - Si le especificamos el atributo `className=""` se comportará de igual manera que cualquier otro elemento
    
- Rutas :
    - Ponemos las rutas en la carpeta *routes* o *views* dentro de la carpeta *src*
    - Creamos un componente de React por cada ruta
    - Importamos `Routes` y `Route` en el componente en el que queramos colocar las anclas (normalmente será *index.js*)
    - Dentro de la etiqueta `<Routes> </Routes>` van las rutas, que se escriben dentro de la etiqueta `<Route> </Route>` y representan la URL y el componente que será dibujado
        - A esa etiqueta `<Route />` le colocamos el atributo `path="/"` en el que pondremos la URL a la que tiene que estar enlazada
            - Si el path es `path="/"`, lo normal es que eliminemos más abajo la etiqueta `<App />`
            - También le tenemos que colocar el componente al que se va a dirigir, con el atributo `element={<Componente />}`
        - Si queremos que un `<Route />` se muestre dentro de otro, simplemente anidamos la ruta en *index.js* y escribimos `<Outlet />` dentro del componente donde queramos que se muestre
            - Si queremos pintar un componente en la misma ruta que su padre, escribiremos `<Route index element={<Componente />} />`
    - Rutas protegidas :
        - Sirven para que la gente no pueda acceder a páginas donde un usuario se autentique, paneles de admin, etc...
        - Primero creo un componente referente a la ruta protegida
        - Después creo otro componente con una verificación, como por ejemplo, una verificación de usuario
        - Añado la verificación al index, y dentro de su etiqueta meto la ruta protegida
    - Para navegar de una ruta a otra, simplemente tenemos que hacer `import { useNavigate } from "react-router-dom";` y donde queramos escribir `navigate("direccion");`

- NavLink :
    - Es una manera de poner enlaces activos
    - Con esto el botón que corresponda al componente que estoy viendo se quedará resaltado mientras que los botones de los demás seguirán igual
    - Uso :
        - Se cambia por la importación y la etiqueta `Link`

- Parámetros :
    - Dentro de la etiqueta `<Route />` en *index.js*, podemos especificar un parámetro dinámico en la URL de la siguiente manera
    - `<Route path='/ruta/:id' element={<Ruta />} />`
    - Para recoger este parámetro en el componente referente a la ruta, se guarda `useParams()` en una variable
    - Y después para usar el parámetro establecido simplemente hay que llamar a `params.id` en este caso

- Parámetros de Búsqueda :
    - `useSearchParams()` funciona de manera muy similar a `useState()` pero lo que hace es una consulta a la URL del estilo `https://app.com/blog?filter=prueba`
    - Se declara de la siguiente manera : `let [searchParams, setSearchParams] = useSearchParams();`
    - Para establecer un parámetro de búsqueda en la URL utilizamos `setSearchParams({nombreParametro});` siendo `nombreParametro` una variable llamada como el parámetro y con el valor que queremos que tenga el parámetro
    - Si en la URL tenemos `https://app.com/blog?nombreParametro=prueba` y se ejecuta `searchParams.get("nombreParametro")`, devolverá el valor del parámetro que en este caso es `prueba`
    - Se puede jugar con estos filtros de parámetros, para después realizar un `variableArray.filter().map()` y filtrar las entradas de datos en la página según se escriba algo para la búsqueda


## Context API
- Es una forma de poder hacer que la comunicación entre componentes sea de manera sencilla y sin complicaciones

- Formas de uso :
    - Primero se crea el contexto, un objeto Context, usando la palabra `export` y la función `createContext()` : `export const VarContext = createContext();`
    - Dentro se mostrará en una etiqueta el Provider del contexto, teniendo como value un objeto compuesto por todas las variables y funciones que necesitemos : `<VarContext.Provider value={{var, func1, func2}} > {children} </VarContext.Provider>`
    - Después se importa en el *index.js* : `import VarProvider from '../context/VarProvider';`
    - Pero para acceder al value del contexto, se tiene que usar `VarContext`
    - En *index.js* meto los componentes que me interese que accedan, dentro de una etiqueta `<VarProvider> </VarProvider>`
    - En los componentes donde queramos hacerlo, para acceder a dichas variables del contexto debemos usar el hook `useContext` : `const {var, func1, func2} = useContext(VarContext);`


## React con PHP y MySQL
- Para hacer una aplicación web creada totalmente con React que consume archivos de PHP a través de AJAX con JSON.

- Tengo que tener :
    - Proyectos separados referentes a cliente y servidor
    - Un archivo PHP con las funciones relacionadas a la BBDD

- Primero desarrollo el servidor (Los archivos PHP) y después debería desarrollar el cliente
    - Para que funcione todo, debería poner en la carpeta *htdocs* los archivos del servidor y pegar ahí los archivos dentro de la carpeta *build* del proyecto de React
    - CRUD :
        - Create :
            - Primero se debe hacer un formulario desde el que se escribirán los datos del nuevo elemento
            - Recojo los datos del form de la misma manera que un objeto : `const datos = {"txt1":txt1, "txt2":txt2};`
            - Creo un objeto JSON con los valores introducidos del form : `const cuerpo = JSON.stringify(datos)`
            - Consumo los datos PHP como si se tratara de una API usando `fetch()`
                - Esta vez, en la dirección del navegador uso `https://localhost/carpeta/?create=1` para que sepa qué código devolver
                - El segundo parámetro será un objeto formado por el método y el cuerpo de la petición : `{method:"POST", body:cuerpo}`
                - Después sigue como un `fetch()` normal
        - Read :
            - Que al llamar al PHP devuelva el resultado de la query codificado en JSON con `json_encode(mysqli_fetch_all(mysqli_query($conexion, sentencia)))`
            - En React, se consumen esos datos como si se tratara de una API usando `fetch()` y se muestran como tal
        - Update :
            - Lo mismo que en Create, pero llamando a una función PHP que actualice el registro de la BBDD
        - Delete :
            - Meto lo siguiente en una función para que se ejecute cuando se active el botón de borrar :
                - Consumo los datos PHP como si se tratara de una API usando `fetch()`
                    - Esta vez, en la dirección del navegador uso `https://localhost/carpeta/?delete=ID` para especificar la ID del dato a borrar
                    - Puedo recargar la página usando `.then((datosRespuesta) => {window.location.reload();}`
                    - Después sigue como un `fetch()` normal

- Axios :
    - Es un paquete que se instala usando el comando `npm install axios`
    - En React :
        - Para importarlo en el archivo que se requiera, se usará `import axios from "axios";`
        - Para obtener datos de la API se usará `axios.get(URL)` de la misma manera que un `fetch()`
        - Para mandar datos a la API se usará `axios.post(URL, cuerpoDeLaPeticion)` de la misma manera que un `fetch()`
    - En PHP :
        - Para todas las operaciones CRUD menos *READ*, se establecerá una variable `$method = $_SERVER["REQUEST_METHOD"];`
        - Se controlará en un `switch($method){case 'POST': code}` en el que dentro del case se escribirá el código PHP