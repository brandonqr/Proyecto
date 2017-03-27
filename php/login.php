<?php
	include_once('model.php');
	//$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');
	$connBd = new baseDatos('localhost','root', 'root','pizzeria');
	$usuario = $_GET['usuario'];
	$contrasena = $_GET['contrasena'];
	$existeUsuario = $connBd->comprobarSiExisteUsuario($usuario, $contrasena);
	if($existeUsuario)
		echo $usuario;
?>