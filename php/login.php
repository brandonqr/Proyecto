<?php
	include_once('model.php');
	$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');
	$usuario = $_GET['usuario'];
	$contrasena = $_GET['contrasena'];
	$existeUsuario = $connBd->comprobarSiExisteUsuario($usuario, $contrasena);
	if($existeUsuario)
		echo "Bienvenido ".$usuario;
	else
		echo "Datos Incorrectos";
?>