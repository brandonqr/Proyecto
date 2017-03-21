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
		        $array[$k] = $v["TIPUS"];
		    }
		    return $array;
		}
		function retornarPorTipus($tipus){

			$stmt = $this->conn->prepare("SELECT * FROM PRODUCTES WHERE PRODUCTES.TIPUS = '$tipus'");
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
			return json_encode($result);
		}
		function masVendidos(){

			$stmt = $this->conn->prepare("SELECT * from PRODUCTES ORDER by VENUTS desc limit 0,3");
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
			return json_encode($result);
			
		}
	}
?>