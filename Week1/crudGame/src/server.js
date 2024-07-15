require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Tables have been created');
    })
    .catch(error => {
        console.error('Unable to create tables:', error);
    });
    
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
