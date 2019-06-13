//leer un .txt y traerlo al html
//crear un nuevo tipo de xmlh


//readyState = 0
let xhr = new XMLHttpRequest
console.log(xhr)
//readyState = 1
//.open recibe el metodo y la url
xhr.open("GET","ajax.txt")


/**
 * 
 * Eventos de ajax
 * 
 * readystatechange: se dispara cada vez que la propiedad readyState cambia
 * 
 * 
 * load: se dispara cuando el readyState es igual a 4
 */

 xhr.addEventListener("readystatechange",cambioDeEstado)

 xhr.addEventListener("load",termino);
//enviar el XHR

xhr.send()

console.log(xhr.response)






function cambioDeEstado() {
    console.log(xhr.readyState)
    
}

function termino(){
    if (xhr.status==200) {
        console.log(xhr.response)
    }


}

//CORS: cross origin resource sharing

//propiedad readyState: dice en que estado se encuentra el pedido(request) al servidor(xml)
//0 a 4;
//0: Objeto Inicializado
//1: Objeto COnfigurado
//2: Headers Enviados y Recibidos
//3: Descargando informacion
//4: Pedido Finalizado

/**
 * STATUS MAS COMUNES:
 * OK:
 * 1XX: 
 * 2XX: 
 * 200->OK,
 * 201->CREATED
 * 
 * 3XX:
 * 304->NOT MODIFIED
 * 
 * ERRORES
 * Errores del cliente:
 * 4XX: 
 * 400->BAD REQUEST
 * 401->UNAUTHORIZED
 * 403->FORBIDDEN
 * 404->NOT FOUND
 * 405->METHOD NOT ALLOWED
 * 
 * 
 * 
 * Errores de servidor:
 * 5XX:
 * 500->INTERNAL SERVER ERROR
 * 504->GATEWAY TIMEOUT
 * 
 * 
 */

/*
REQUEST
GET index.html HTTP/1.1
HEADERS: se autocompletan con una direccion mas exacta de donde se obtiene el GET
host: http://mipagina.com
User-Agent: (que navegador pide el Get)
RESPONSE:
HTTP/1.1 404 NOT FOUND
HEADERS RESPOUESTA:
server: Ej: Apache 5.4/win32
Content-type: text/plain (MIME type)
Content-Length: peso del archivo(bytes)
METODOS/VERBOS HTTP:
GET-POST-PUT-PATCH-DELETE
 
*/