module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    // console.log(db);
    db.getAllInventory().then((inventory) => {
      res
        .status(200)
        .send(inventory)
        .end();
    });
  },

  addProduct: (req, res) => {
    const db = req.app.get('db');
    const product = req.body;

    db.addProduct(product).then(() => {
      res
        .status(200)
        .send()
        .end();
    });
  },

  removeProduct: (req, res) => {
    const db = req.app.get('db');
    const { params } = req;

    db.removeProduct(params).then(() => {
      res
        .status(200)
        .send()
        .end();
    });
  }
};
