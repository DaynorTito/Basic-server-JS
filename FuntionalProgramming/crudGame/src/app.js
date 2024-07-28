const express = require('express');
const { sequelize } = require('./models');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
app.use(express.json());
app.use('/api', gameRoutes);

sequelize.sync()
    .then(() => {
        console.log('Tables have been created');
    })
    .catch(error => {
        console.error('Unable to create tables:', error);
    });

module.exports = app;
