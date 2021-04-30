const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ping',(req,res)=> {
  res.json('pong');
});

app.get('/greet/:name', (req, res) => {
  try {
    const { name } = req.params;
    res.send(`Why hello there, ${name}!`);
  } catch (e) {
    res.send('Name not found! Please enter a name at end of route.');
  }
});

app.get('/five', (req, res) => {
  let array1to5 = [1, 2, 3, 4, 5];
  res.send(array1to5);
});

app.get('/evens/:n', async (req, res) => {
  try {
    const { n } = req.params;
    // nParsedInt = parseInt(n)

    if (n > 3) {
      let evenArr = [];
      for (let i = 0; i >= n; i += 2) {
        evenArr.push(i);
      }
      res.send(evenArr);
      console.log(evenArr)
  }
} catch (e) {
    res.send('Number not found! Please enter number at end of route.')
  }
});

app.get('/fruits',(req,res)=> {
  res.json(fruits);
});

app.listen(PORT, () => {
  console.log(`up on port ${PORT}`)
});