require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

const port = 4000;

app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct);

massive(CONNECTION_URI).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(port, () => console.log(`Listening to port: ${port}`));
});
