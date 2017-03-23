<?php
	$idFranquicia=1;
	require_once('model.php');
	$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');
	$usuario=$_GET['usuario'];
	$dadesClient =(object)[
	'nom' => $_GET['nombre'],
	'usr' => $usuario,
	'pass' => $_GET['passwd'],
	'calle' => $_GET['calle'],
	'num' => $_GET['numero'],
	'ciu' => $_GET['ciudad'],
	'cp' => $_GET['cp'],
	'prov' => $_GET['provincia'],
	'mail' => $_GET['email'],
	'tlf' => $_GET['telefono'],
	'idFranquicia'=>$idFranquicia,
	];

	$puedeRegistrarse=$connBd->puedeRegistrarse($usuario);
	if($puedeRegistrarse){
		$connBd->registrarUsuario($dadesClient);

		header('index.html');
	}
	else{
		header('registro.html');
	}

?>