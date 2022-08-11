<?php
    require_once "funcionesBBDD.php";
    include "cors.php"; // IMPORTANTE incluir el CORS

    $conexionBD = conectarBBDD(); // Consigo la conexión a la BBDD

 
    /**
     * Consigo un usuario de la BBDD
     * 
     * @param $conexion La conexión con la base de datos
     * @param $id La ID del usuario que quiero buscar
     */
    function leerUsuario($conexion, $id){
        $sentencia = "SELECT * FROM ".TABLA_USUARIOS." WHERE id = ".$id;
        $resultado = mysqli_query($conexion, $sentencia); // Guardo el resultado de la ejecución de la sentencia para recorrerse

        if(mysqli_num_rows($resultado) > 0){
            $usuario = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
            echo json_encode($usuario);
            exit();
        }
        else{
            echo json_encode(["success"=>0]);
        }
    }

    
    // CREATE :
    if (isset($_GET["registrarUsuario"])) {
        $data = json_decode(file_get_contents("php://input")); // Consigo los datos que el usuario ha escrito
        // Los guardo en sus variables correspondientes
        $email = $data->txtEmail;
        $nickname = $data->txtNickname;
        $password = md5($data->txtPassword);
        $imagen = "a";
        $rol = $data->rol;

        if(registrarUsuario($conexion, $email, $nickname, $password, $imagen, $rol)){
            echo json_encode(["success"=>1]);
        }
        else {
            echo json_encode(["error"=>99]);
        }

        exit();
    }


    // READ :
    if (isset($_GET["consultarUsuario"])){
        leerUsuario($conexionBD, $_GET["consultarUsuario"]);
        exit();
    }


    // UPDATE :
    if (isset($_GET["actualizarUsuario"])){
        if(actualizarUsuario($conexion, $id, $GET["txtEmail"], $_GET["txtNickname"], $_GET["txtPassword"], "a", $_GET["rol"])){ // TODO : Ver ID
            echo json_encode(["success"=>1]);
        }
        else {
            echo json_encode(["error"=>99]);
        }
        exit();
    }


    // Codifico los usuarios de la BBDD
    $sentencia = "SELECT * FROM ".TABLA_USUARIOS.";";
    $resultado = mysqli_query($conexionBD, $sentencia); // Guardo el resultado de la ejecución de la sentencia para recorrerse

    if(mysqli_num_rows($resultado) > 0){
        $usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
        echo json_encode($usuarios);
        exit();
    }
?>