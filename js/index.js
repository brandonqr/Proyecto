var urlServidor="http://localhost/Proyecto/php/index.php";
var arrayProductos=[];
$(function() { //verificar si existe cookie por ajax
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(this.responseText!=""){
				$("#loginUser")[0].style.display="none";
				$("#textoOBoton").html(this.responseText);
				$(".pPrecio").removeClass("ocultarPrecio");			}

			}
		};
		var nombreArchivo="http://localhost/Proyecto/php/existeCookie.php";
		xhttp.open("GET", nombreArchivo, true);
		xhttp.send();
	});
	function Web() {
	//that=this;
	this.crearPestanas=crearPestanas;
	this.cargarTipus=loadDoc("tipos",this.crearPestanas);
	this.masVendidos=masVendidos;
	this.cargarMasVendidos=loadDoc("masVendidos",this.masVendidos)
	
/*
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
	*/
	function loadDoc(variable, funcion) {
		var nombre=this.nombre;
		var nombreArchivo="php/proxy.php?url="+urlServidor+"&variable="+variable;
		$.ajax({
			async:false, 
			cache:false,
			dataType:"html", 
			type: 'POST',   
			url: nombreArchivo,
			data: "nombre="+nombre, 
			success:  function(respuesta){
                          //console.log(respuesta);
                          funcion(respuesta);
                      },
                      beforeSend:function(){},
                      error:function(objXMLHttpRequest){}
                  });
	}
	
	function crearPestanas(jsonText) {//el contenido de las pestañas seran los productos
		var tipos = $.map(JSON.parse(jsonText), function(el) { return el });

		var ul=$("<ul>");
		for (var i = 0; i < tipos.length; i++) {
			var a=$("<a>").attr({href:"php/contenidoPestana.php?variable="+tipos[i]}).text(tipos[i]);
			ul.append($("<li>").append(a));
		}
		$("#tabs").append(ul);
		
	}
	function masVendidos(jsonText) {
		var contenedorProductosTop=$("#top");
		var productos=JSON.parse(jsonText);
		for (var i = 0; i < productos.length; i++){
			var p=productos[i];
			console.log(p.DESCRIPCIO);
			p.DESCRIPCIO="";
			new Producto(p,contenedorProductosTop);
		}
	}
	this.cargarTipus;
	this.masVendidos();
}
new Web();

//$("#contrasenaRegistro").value
