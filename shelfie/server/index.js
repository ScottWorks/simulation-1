require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct);
// app.delete('/api/inventory/:id', controller.removeProduct);

const port = process.env.PORT || 4000;
massive(process.env.REACT_APP_CONNECTION_URI).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
});
