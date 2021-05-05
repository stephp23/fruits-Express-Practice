const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('This is the root');
});

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.get('/greet/:name', (req, res) => {
  try {
    const { name } = req.params;
    res.send(`Why hello there, ${name}!`);
  } catch (e) {
    res.send('Name not found! Please enter a name at end of link.');
  }
});

app.get('/five', (req, res) => {
  let array1to5 = [1, 2, 3, 4, 5];
  res.send(array1to5);
});

app.get('/evens/:n', async (req, res) => {
  try {
    const { n } = req.params;
    const nInteger = parseInt(n)
    // console.log(n)

    if (nInteger > 1) {
      let evenArray = [];
      for (let i = 2; i <= nInteger; i += 2) {
        evenArray.push(i);
      }
      res.send(evenArray);
      console.log(nInteger)
    }
  } catch (e) {
    // console.log(e);
    res.send('Number not found! Please enter number at end of link.')
  }
});

app.get('/namelength/:name', (req, res) => {
  try {
    const { name } = req.params;
    if (name) {
      res.send(`The name ${name} is ${name.length} letters long!`);
    }
  } catch (e) {
    res.send('Name not found! Please enter a name at end of link.');
  }
});

app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/fruits/:name', (req, res) => {
  try {
    const { name } = req.params;
    let fruitNameMatch = fruits.filter((fruit) => {
      if (fruit.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        return fruit;
      }
    });
    res.json(fruitNameMatch);
  } catch (e) {
    res.send('Fruit name not found! Please enter a fruit name at end of link.');
  }
});

app.get('/fruits/sort', (req, res) => {

  res.send()
})


app.listen(PORT, () => {
  console.log(`up on port ${PORT}`)
});