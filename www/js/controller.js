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
	params = {nombre: nombre, direccion: direccion, imagen: urlimg, descripcion: descripcion, tipo: tipo};
	//var t = callService(true, 'urlService', 'params', 'post', null, null, null);
	$.ajax({
            async: true ,
            url: urlService,
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: params,
            beforeSend: null,
            dataType: 'json',
            success: null,
            timeout: 6000,
            error: null
        });
	alert("hola3")
}