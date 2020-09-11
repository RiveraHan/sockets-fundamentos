const socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Connectado al servidor');

})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');

});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Hanzell',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server:', resp);

});

// Escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

})