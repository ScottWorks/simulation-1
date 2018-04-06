require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

const port = 3113;

app.get('/api/inventory', controller.getInventory);
// controller.addProduct
app.post('/api/product', (req, res) => {
  const db = req.app.get('db');
  const { name, price, img } = req.body;
  console.log(name);
  console.log(price);
  console.log(img);

  db.addProduct([name, price, img]).then(() => {
    res
      .status(200)
      .send()
      .end();
  });
});

massive(CONNECTION_URI).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(port, () => console.log(`Listening to port: ${port}`));
});
