<?php
	require_once('model.php');
	$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');

	$nom = $_GET['nombre'];
	$usr = $_GET['usuario'];
	$pass = $_GET['passwd'];
	$calle = $_GET['calle'];
	$num = $_GET['numero'];
	$ciu = $_GET['ciudad'];
	$cp = $_GET['cp'];
	$prov = $_GET['provincia'];
	$mail = $_GET['email'];
	$tlf = $_GET['telefono'];

	$existeUsuario = $connBd->comprobarSiExisteUsuario($usuario, $pass);
	if($existeUsuario){
		$connBd->registrarUsuario($nom,$usr,$pass,$calle,$num,$ciu,$cp,$prov,$mail,$tlf);
		header('index.html');
	}
	else{
		header('registro.html');
	}

?>