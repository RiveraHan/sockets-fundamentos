const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvido al chat'
    });
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo bien'
        //     });

        // } else {
        //     callback({
        //         resp: 'Algo salio mal'
        //     });
        // }

    })
});