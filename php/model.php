<?php

class baseDatos
{
	private $servidor;
	private $usuario;
	private $passwd;
	private $nombreDB;
	private $conn;
	function __construct($servidor,$usuario,$passwd,$nombreDB)
	{
		$this->servidor = $servidor;
		$this->usuario = $usuario;
		$this->passwd = $passwd;
		$this->nombreDB = $nombreDB;
		try{
			$this->conn = new PDO("mysql:host=".$this->servidor.";dbname=".$this->nombreDB, $usuario,$passwd);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		catch(PDOException $e){
			echo "conn fail" . $e->getMessage();
		}
	}

	function retornarTipus(){

		$stmt = $this->conn->prepare("SELECT DISTINCT TIPUS FROM PRODUCTES");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
		$array = [];
		foreach($result as $k => $v) { 
			$array[$k] = utf8_encode($v["TIPUS"]);
		}
		return $array;
	}
	function retornarPorTipus($tipus){
		$arrayProductosTipus= array();
		$stmt = $this->conn->prepare("SELECT * FROM PRODUCTES WHERE PRODUCTES.TIPUS = '$tipus'");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($result as $row) {
		 	array_push($arrayProductosTipus,array(
			"NOM"=>utf8_encode($row['NOM']),
			"DESCRIPCIO"=>utf8_encode($row['DESCRIPCIO']),
			"PREU"=>utf8_encode($row['PREU']),
			"IMATGES"=>utf8_encode($row['IMATGES']),
			"INGREDIENTS"=>utf8_encode($row['INGREDIENTS']),
			"VENUTS"=>utf8_encode($row['VENUTS']),
			"TIPUS"=>utf8_encode($row['TIPUS'])));
		 } 
		
		return json_encode($arrayProductosTipus);
	}
	function masVendidos(){
		$arrayProductosMasVendidos= array();
		$stmt = $this->conn->prepare("SELECT * from PRODUCTES ORDER by VENUTS desc limit 0,3");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		foreach ($result as $row) {
		 	array_push($arrayProductosMasVendidos,array(
			"NOM"=>utf8_encode($row['NOM']),
			"DESCRIPCIO"=>utf8_encode($row['DESCRIPCIO']),
			"PREU"=>utf8_encode($row['PREU']),
			"IMATGES"=>utf8_encode($row['IMATGES']),
			"INGREDIENTS"=>utf8_encode($row['INGREDIENTS']),
			"VENUTS"=>utf8_encode($row['VENUTS']),
			"TIPUS"=>utf8_encode($row['TIPUS'])));
		 } 
		
		return json_encode($arrayProductosMasVendidos);

	}
	function comprobarSiExisteUsuario($usuari, $contrasena)
	{
		$stmt = $this->conn->prepare("SELECT usuari FROM `CLIENTS` WHERE usuari='$usuari' and contrasenya='$contrasena' and ID_FRANQUICIA=1");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return (empty($result))?false:true;
	}
	function puedeRegistrarse($usuari)
	{
		$stmt = $this->conn->prepare("SELECT usuari FROM `CLIENTS` WHERE usuari='$usuari'and ID_FRANQUICIA=1");
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		return (empty($result))?true:false;
	}
	function registrarUsuario($dadesUsuario)
	{
		echo "<pre>".var_dump($dadesUsuario)."</pre>";
		$stmt = $this->conn->prepare("INSERT INTO CLIENTS(`ID`, `NOM_COMPLET`, `USUARI`, `CONTRASENYA`, `CARRER`, `NUMERO`, `CIUTAT`, `CP`, `PROVINCIA`, `EMAIL`, `TELEFON`, `ID_FRANQUICIA`) VALUES (NULL,
			'$dadesUsuario->nom',
			'$dadesUsuario->usr',
			'$dadesUsuario->pass',
			'$dadesUsuario->calle',
			'$dadesUsuario->num',
			'$dadesUsuario->ciu',
			'$dadesUsuario->cp',
			'$dadesUsuario->prov',
			'$dadesUsuario->mail',
			'$dadesUsuario->tlf',
			$dadesUsuario->idFranquicia)");

		$stmt->execute();
	}
}
?>