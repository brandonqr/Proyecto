var divProductos=$("<div>").addClass("contenedorProductos");
$("#tabs").append(divProductos);
function ContenidoPestana(jsonText) {
console.log("a");
	$(".contenedorProductos").empty();
	var productos=$.map(JSON.parse(jsonText), function(el) { return el });
	for (var i = 0; i < productos.length; i++) {
		new Producto(productos[i])
		console.log(productos[i]);
	}
}
function Producto(p) {
	this.tipo=p.tipus;
	this.imagen=p.imatge;
	this.nombre=p.nom;
	this.descripcion=p.descripcio;
	this.precio=p.preu;
	this.ingredientes=p.ingredients;
	this.vendidos=p.venuts;
	this.crearDivProducto=crearDivProducto(this);
	function crearDivProducto(producto) {
		var divProducto=$("<div>").addClass("producto");
		var pImagen=$("<img>").addClass("pImagen").attr("src",producto.imagen)
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