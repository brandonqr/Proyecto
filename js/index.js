var urlServidor="http://localhost/Proyecto/php/index.php";
var arrayProductos=[];
function Web() {
	//that=this;
	this.crearPestanas=crearPestanas;
	this.cargarTipus=loadDoc("tipos",this.crearPestanas);

	function loadDoc(variable, funcion) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				funcion(this.responseText);

			}
		};
		var nombreArchivo="php/proxy.php?url="+urlServidor+"&variable="+variable;
		xhttp.open("GET", nombreArchivo, true);
		xhttp.send();
	}
	this.cargarTipus;
	function crearPestanas(jsonText) {//el contenido de las pestañas seran los productos
		var tipos = $.map(JSON.parse(jsonText), function(el) { return el });
		
		var ul=$("<ul>");
		for (var i = 0; i < tipos.length; i++) {
			var a=$("<a>").attr({href:"php/contenidoPestana.php?variable="+tipos[i]}).text(tipos[i]);
			ul.append($("<li>").append(a));
		}
		$("#tabs").append(ul);
		
	}

}

new Web();