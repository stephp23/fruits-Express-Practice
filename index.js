const express = require('express');
const fruits = require("./fruits");

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`up on port ${PORT}`)
});

app.get('/ping',(req,res)=> {
  res.json('pong');
});

app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Why hello there, ${ name }!`);
});

app.get('/five', (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

app.get('/evens/:n', async (req, res) => {
  try {

    const { n } = req.params;
    
    for (let i = 0; i <= parseInt(n); i++) {
      let evenArray = [];
        if (i % 2 === 0) evenArray.push(i);
    }
    res.send(evenArray);
  } catch (e) {
    res.send('Number not found! Please enter number at end of route.')
  }
})