//---------------------------------------------------------------------- Import

const express = require('express');
const Container = require('./desafio_2/app');
const random = require('random');


//---------------------------------------------------------------------- Express server

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send(`<h1>Primer servidor Express</h1>
  <hr>
  <ul>
      <li><a href="productos">Todos los productos -></a></li>
      <li><a href="productoRandom">Producto random -></a></li>
  </ul>
  <p>Status: ${res.statusCode}<p>
`)
})

app.get('/productos', (req, res) => {
  const products = new Container('./file.txt');
  const allProducts = products.getAll();
  res.send(allProducts.then(res => {
    console.log('Todos los productos ->', res);
  }).catch(err => console.log('Error ->', err)));
})

app.get('/productoRandom', (req, res) => {
  const products = new Container('./file.txt');
  const allProducts = products.getAll();
  res.send(allProducts.then(res => {
    const n = random.int(0, res.length-1);
    console.log('Producto random ->', res[n]);
  }).catch(err => console.log('Error ->', err)));
})

const server = app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`)
});

server.on('error', error => console.log('Error en servidor ->', error));