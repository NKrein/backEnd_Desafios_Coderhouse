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

app.get('/productos', (require, response) => {
  const products = new Container('./file.txt');
  const allProducts = products.getAll();
  allProducts.then( res => {
    response.send(`  
    <div style="display: flex; flex-flow: row wrap;">
      ${res.map(e => `
        <div style='text-align: center; margin: 50px;'>
          <h3>${e.title}</h3>
          <img width='100px' src=${e.thumbnail} alt=${e.title}>
          <p><b>$${e.price}</b></p>
          <p>Id: ${e.id}</p>
        </div>
      `)}
    </div>`
  )}).catch(err => console.log('Error ->', err));
})

app.get('/productoRandom', (require, response) => {
  const products = new Container('./file.txt');
  const allProducts = products.getAll();
  allProducts.then(res => {
  const n = random.int(0, res.length - 1);
  response.send(`
    <div style='text-align: center; margin: 50px;'>
      <h3>${res[n].title}</h3>
      <img width='100px' src=${res[n].thumbnail} alt=${res[n].title}>
      <p><b>$${res[n].price}</b></p>
      <p>Id: ${res[n].id}</p>
    </div>`
  )}).catch(err => console.log('Error ->', err));
})

const server = app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`)
});

server.on('error', error => console.log('Error en servidor ->', error));