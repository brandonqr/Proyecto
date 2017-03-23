<?php
	include_once('model.php');
	$connBd = new baseDatos('localhost','root', 'root','pizzeria');
	$usuario = $_GET['usuario'];
	$contrasena = $_GET['contrasena'];
	$existeUsuario = $connBd->comprobarSiExisteUsuario($usuario, $contrasena);
	if($existeUsuario)
		echo "Bienvenido ".$usuario;
?>