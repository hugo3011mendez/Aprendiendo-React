<?php
    include_once "cors.php"; // Incluyo el CORS
    include_once "funcionesBBDD.php";

    $videojuego = json_decode(file_get_contents("php://input"));
    $resultado = guardarVideojuego($videojuego);
    echo json_encode($resultado); // TODO : Adaptarlo a mi código
?>