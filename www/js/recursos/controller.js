function agregarLugar(){
	var nombre, telefono, direccion, urlimg, descripcion, tipo, tags;
	nombre = campoNombre.value;
	telefono = campoTelefono.value;
	direccion = campoDireccion.value;
	urlimg = campoImagen.value;
	descripcion = campoDescripcion.value;
	tipo = campoTipo.value;
	tags = campoTags.value;
	urlService = "http://guiarte.uni.me/MedellinInteractiva/servicios/ServicioLugar.php";
	params = {nombreServicio: 'insertar', nombre: nombre, direccion: direccion, imagen: urlimg, descripcion: descripcion, tipo: tipo};
	//var t = callService(true, 'urlService', 'params', 'post', null, null, null);
	$.ajax({
           url: urlService,
           contentType: 'application/x-www-form-urlencoded',
           data: params,
           beforeSend: prueba(),
           dataType: 'json',
           timeout: 6000,
           });
    prueba();
	
}

function prueba(){
    
    alert("hola")
}