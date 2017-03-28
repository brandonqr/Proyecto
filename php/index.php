<?php
	include_once('model.php');
	$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');
	//$connBd = new baseDatos('localhost','root', 'root','pizzeria');
	$variable = $_GET['variable'];


	switch ($variable) {
		case 'tipos':
		$tipos = $connBd->retornarTipus();
		echo json_encode($tipos);
		break;
		case 'masVendidos':
		$vendidos = $connBd->MasVendidos();
		echo $vendidos;
		break;
	}
/*
	echo $_COOKIE["usuario"]; 
	echo $_COOKIE["contrasena"]; 
*/
	?> 