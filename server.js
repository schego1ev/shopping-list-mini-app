const express = require('express');
require('dotenv').config();

const app = express();
let shoppingList = ['Milk', 'Bread'];

app.use(express.json());
app.use(express.static('public'));

app.get('/api/items', (req, res) => {
  res.json(shoppingList);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  
  shoppingList.push(newItem.text);
  res.json(shoppingList);
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
