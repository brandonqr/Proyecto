<?php
if(isset($_GET['variable']) && isset($_GET['url'])){
	$url= $_GET['url'];
	$variable=$_GET['variable'];
	echo file_get_contents( $url."?variable=".$variable );
}
?>
