const express = require('express');
const app = express();
const db = require('./models/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.listen(8080, () => {
  console.log('Começou!');
})

app.get('/', (req, resp) => {
  resp.send('Bem vindo à API Burger Queen!');
})

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

db.sequelize.sync();