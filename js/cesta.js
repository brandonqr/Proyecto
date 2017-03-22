new Cesta();
function Cesta() {
	this.crearDivCesta=crearDivCesta;
	var divCesta=$("#cesta")
	
	function crearDivCesta() {
		var imagenCesta="img/cesta.png"
		var cestaImagen=$("<img>").addClass("cestaImagen").attr({src:imagenCesta});
		var contadorCesta=$("<div>").addClass("contadorCesta").attr("id","contadorCesta").html("0");
		divCesta.append(cestaImagen,contadorCesta);
	}

	this.crearDivCesta();
}
