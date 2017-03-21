var divProductos=$("<div>").addClass("contenedorProductos");
$("#tabs").append(divProductos);
function ContenidoPestana(jsonText) {
	$(".contenedorProductos").empty();
	var productos=$.map(JSON.parse(jsonText), function(el) { return el });
	for (var i = 0; i < productos.length; i++) {
		new Producto(productos[i])
		
	}
}
function Producto(p) {
	console.log(p.VENUTS);
	this.tipo=p.TIPUS;
	this.imagen=p.IMATGES;
	this.nombre=p.NOM;
	this.descripcion=p.DESCRIPCIO;
	this.precio=p.PREU;
	this.ingredientes=p.INGREDIENTS;
	this.vendidos=p.VENUTS;
	this.crearDivProducto=crearDivProducto(this);
	function crearDivProducto(producto) {
		var divProducto=$("<div>").addClass("producto");
		var pImagen=$("<img>").addClass("pImagen").attr("src",this.imagen)
		var pNombre=$("<div>").addClass("pNombre").html(producto.nombre);
		var pDescripcion=$("<div>").addClass("pDescripcion").html(producto.descripcion);
		var pPrecio=$("<div>").addClass("pPrecio").html(producto.precio);
		var btnAgregar=$('<button>').addClass("pAgregar").html("agregar").css({display:"none"});
		divProducto.append(pNombre, pImagen, pDescripcion,pPrecio,btnAgregar);

		divProducto.on("mouseover",function() {btnAgregar.css({display:"inline-block"});})//cuanto el raton está sobre el div

		divProducto.on("mouseout",function() {btnAgregar.css({display:"none"});})//cuanto el raton deja de estar sobre el div

		btnAgregar.click(function() {//este click agrega a la cesta
			arrayProductos.push(producto);
			console.log(arrayProductos);
			$('#contadorCesta').html(arrayProductos.length)
		})
		$(divProductos).append(divProducto);
	}
	this.crearDivProducto;
}