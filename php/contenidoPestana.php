<?php
	include_once('model.php');
	$connBd = new baseDatos('daw.institutmontilivi.cat','pizzeria', 'p1zz3r14','pizzeria');
	$value = $connBd->retornarTipus();
	$variable=$_GET['variable'];
	

	if (in_array($variable, $value)) {
		$jsonText = $connBd->retornarPorTipus($variable);
		//echo $jsonText;
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="js/jquery-3.1.1.js"></script>
	<script type="text/javascript" src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/contenidoPestana.js"></script>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="http:/resources/demos/style.css">
</head>
<body>
	<script type="text/javascript">
		new ContenidoPestana('<?php echo $jsonText?>');
	</script>
</body>
</html>