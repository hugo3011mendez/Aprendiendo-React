<?php
    require_once "funcionesBBDD.php";
    include "cors.php"; // IMPORTANTE incluir el CORS

    $conexionBBDD = conectarBBDD(); // Consigo la conexión a la BBDD
    $conexionBBDD->autocommit(FALSE); // Desactivo el autocommit


    
    // CREATE :
    if (isset($_GET["registrarUsuario"])) {
        $data = json_decode(file_get_contents("php://input")); // Consigo los datos que el usuario ha escrito
        // Los guardo en sus variables correspondientes
        $email = $data->txtEmail;
        $nickname = $data->txtNickname;
        $password = $data->txtPassword;
        $rol = $data->rol;

        if(registrarUsuario($conexionBBDD, $email, $nickname, $password, $rol)){
            echo json_encode(["success"=>1]);
        }
        else {echo json_encode(["success"=>0]);}

        exit();
    }


    // UPDATE :
    if (isset($_GET["actualizarUsuario"])){
        $data = json_decode(file_get_contents("php://input")); // Consigo los datos que el usuario ha escrito
        // Los guardo en sus variables correspondientes
        $id = $data->id;
        $email = $data->txtEmail;
        $nickname = $data->txtNickname;
        $imagen = "a";
        $rol = $data->rol;

        $pwdCambiada = $data->flag; // Consigo la variable
        $password = ""; // Inicializo la variable referente a la PWD
        $pwdCambiada ? $password = md5($data->txtPassword) : $password = $data->txtPassword; // Compruebo la flag y establezco la PWD

        if(actualizarUsuario($conexionBBDD, $id, $email, $nickname, $password, $rol)){
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
    if (isset($_GET["listaUsuarios"])) {
        // Codifico los usuarios de la BBDD
        $sentencia = "SELECT * FROM ".TABLA_USUARIOS.";";
        $resultado = mysqli_query($conexionBBDD, $sentencia); // Guardo el resultado de la ejecución de la sentencia para recorrerse
    
        if(mysqli_num_rows($resultado) > 0){
            $usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
            echo json_encode($usuarios);
            exit();
        }
    }

    // $_GET["conseguirUsuario"] es la ID del usuario
    if (isset($_GET["conseguirUsuario"])) {
        $sentencia = "SELECT * FROM ".TABLA_USUARIOS." WHERE id=".$_GET["conseguirUsuario"].";";
        $resultado = mysqli_query($conexionBBDD, $sentencia); // Guardo el resultado de la ejecución de la sentencia para recorrerse

        if(mysqli_num_rows($resultado) > 0){
            $usuario = mysqli_fetch_all($resultado, MYSQLI_ASSOC);
            echo json_encode($usuario);
            exit();
        }
    }
?>