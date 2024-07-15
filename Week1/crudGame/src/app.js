const express = require('express');
const { sequelize } = require('./models'); // Asegúrate de que esta ruta sea correcta
const gameRoutes = require('./routes/gameRoutes'); // Importa las rutas

const app = express();
app.use(express.json());
app.use('/api', gameRoutes); // Configura las rutas

// Sincroniza la base de datos
sequelize.sync()
    .then(() => {
        console.log('Tables have been created');
    })
    .catch(error => {
        console.error('Unable to create tables:', error);
    });

module.exports = app;
