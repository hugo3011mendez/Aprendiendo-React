<?php // Archivo CORS para aceptar peticiones desde React 
    $dominioPermitido = "http://localhost:3000"; // TODO : Decidir si dejar un dominio permitido o poner "*"
    header("Access-Control-Allow-Origin: $dominioPermitido");
    header("Access-Control-Allow-Headers: content-type");
    header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
?>