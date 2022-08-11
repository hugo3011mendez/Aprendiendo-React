<?php
    require_once "funcionesBBDD.php";
    include "cors.php"; // IMPORTANTE incluir el CORS

    $conexionBBDD = conectarBBDD(); // Consigo la conexión a la BBDD

    
    // CREATE :
    if (isset($_GET["registrarUsuario"])) {
        $data = json_decode(file_get_contents("php://input")); // Consigo los datos que el usuario ha escrito
        // Los guardo en sus variables correspondientes
        $email = $data->txtEmail;
        $nickname = $data->txtNickname;
        $password = md5($data->txtPassword);
        $imagen = "a";
        $rol = $data->rol;

        if(registrarUsuario($conexionBBDD, $email, $nickname, $password, $imagen, $rol)){
            echo json_encode(["success"=>1]);
        }
        else {echo json_encode(["success"=>0]);}

        exit();
    }


    // UPDATE :
    if (isset($_GET["actualizarUsuario"])){
        if(actualizarUsuario($conexionBBDD, $id, $GET["txtEmail"], $_GET["txtNickname"], $_GET["txtPassword"], "a", $_GET["rol"])){ // TODO : Ver ID
            echo json_encode(["success"=>1]);
        }
        else {echo json_encode(["success"=>0]);}
        exit();
    }


    // DELETE : $_GET["eliminarUsuario"] es la ID del usuario
    if (isset($_GET["eliminarUsuario"])){
        if(eliminarUsuario($conexionBBDD, $_GET["eliminarUsuario"])){
            echo json_encode(["success"=>1]);
            exit();
        }
        else{echo json_encode(["success"=>0]);}
    }


    // READ :
    // Codifico los usuarios de la BBDD
    $sentencia = "SELECT * FROM ".TABLA_USUARIOS.";";
    $resultado = mysqli_query($conexionBBDD, $sentencia); // Guardo el resultado de la ejecución de la sentencia para recorrerse

    if(mysqli_num_rows($resultado) > 0){
        $usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
        echo json_encode($usuarios);
        exit();
    }
?>