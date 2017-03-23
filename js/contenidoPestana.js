var divProductos=$("<div>").addClass("contenedorProductos");
$("#tabs").append(divProductos);
var tiposProducto=[];
function ContenidoPestana(jsonText) {
	$(".contenedorProductos").empty();
	var productos=JSON.parse(jsonText);
	for (var i = 0; i < productos.length; i++) {
		new Producto(productos[i],divProductos)
	}
}
function Producto(p,contenedor) {
	this.tipo=p.TIPUS;
	this.imagen=p.IMATGES;
	this.nombre=p.NOM;
	this.descripcion=p.DESCRIPCIO;
	this.precio=p.PREU;
	this.ingredientes=p.INGREDIENTS;
	this.vendidos=p.VENUTS;
	this.crearDivProducto=crearDivProducto(this);
	this.mostrarProductosCesta=mostrarProductosCesta;
	this.separarProductosPorTipo=separarProductosPorTipo;
	function crearDivProducto(producto) {
		var divProducto=$("<div>").addClass("producto");
		var pImagen=$("<img>").addClass("pImagen").attr("src", producto.imagen);
		var pNombre=$("<div>").addClass("pNombre").html(producto.nombre);
		var pDescripcion=$("<div>").addClass("pDescripcion").html(producto.descripcion);
		var pPrecio=$("<div>").addClass("pPrecio").html(producto.precio);
		var btnAgregar=$('<button>').addClass("pAgregar").html("agregar").css({display:"none"});
		divProducto.append(pNombre, pImagen, pDescripcion,pPrecio,btnAgregar);

		divProducto.on("mouseover",function() {btnAgregar.css({display:"inline-block"});})//cuanto el raton está sobre el div

		divProducto.on("mouseout",function() {btnAgregar.css({display:"none"});})//cuanto el raton deja de estar sobre el div

		btnAgregar.click(function() {//este click agrega a la cesta
			arrayProductos.push(producto);
			separarProductosPorTipo();
			$('#contadorCesta').html(arrayProductos.length)
		})
		$(contenedor).append(divProducto);
	}
	function separarProductosPorTipo() {//se ejecuta cada vez que se hace un hover a la cesta
		arrayProductosPorTipo=[];//reinicializar arrays para no sobrecargar valores anteriores
		TiposProducto=[];
		for (var i = 0; i < arrayProductos.length; i++) {
			if(arrayProductos[i].tipo+"_"+arrayProductos[i].nombre in arrayProductosPorTipo)
			{
				arrayProductosPorTipo[arrayProductos[i].tipo+"_"+arrayProductos[i].nombre].push(arrayProductos[i]);
			}
			else{
				TiposProducto.push(arrayProductos[i].tipo+"_"+arrayProductos[i].nombre);
				arrayProductosPorTipo[arrayProductos[i].tipo+"_"+arrayProductos[i].nombre]=[];
				arrayProductosPorTipo[arrayProductos[i].tipo+"_"+arrayProductos[i].nombre].push(arrayProductos[i]);
			}
		}
		mostrarProductosCesta();
	}
	function mostrarProductosCesta() {
		$("#cesta").empty();
		for (var i = 0; i < TiposProducto.length; i++) {
			var producto=arrayProductosPorTipo[TiposProducto[i]][0];//coger el primer producto del array
			console.log(producto);
			var cantidadPorProducto=arrayProductosPorTipo[TiposProducto[i]].length;
			var imagenProductoCesta=$("<img>").addClass("imagenProductoCesta").attr("src",producto.imagen);
			var nombreProductoCesta=$("<div>").addClass("nombreProductoCesta").html(producto.nombre);
			var descripcionProductoCesta=$("<div>").addClass("descripcionProductoCesta").html(producto.descripcion);
			var precioProductoCesta=$("<div>").addClass("precioProductoCesta").html(producto.precio);
			var cantidadProductoCesta=$("<div>").addClass("cantidadProductoCesta").html(cantidadPorProducto);
			$("#cesta").append(imagenProductoCesta,nombreProductoCesta,descripcionProductoCesta,precioProductoCesta,cantidadPorProducto);
		}
		//$("#cesta").append(divMostrarProductos);
	}
	this.crearDivProducto;
}
