//---------------------------------------------------------------------- Import

const Container = require('./app.js');

//---------------------------------------------------------------------- Test

const p1 = {
  title: 'product1', 
  price: 123, 
  thumbnail: 'url1'
}

const p2 = {
  title: 'product2', 
  price: 456, 
  thumbnail: 'url2'
}

const p3 = {
  title: 'product3', 
  price: 789, 
  thumbnail: 'url3'
}

const p4 = {
  title: 'product4', 
  price: 1011, 
  thumbnail: 'url4'
}


async function test() {
  try {
    const test1 = new Container('./file.txt');
  
    const show1 = await test1.getAll();
    console.log('Muestra Inicial ->', show1);
  
    const addP1 = await test1.save(p1);
    console.log('p1 ->', addP1);
    const addP2 = await test1.save(p2);
    console.log('p2 ->', addP2);
  
    const id2 = await test1.getById(2);
    console.log('Con Id 2 ->', id2);
  
    const addP3 = await test1.save(p3);
    console.log('p3 ->', addP3);
    const addP4 = await test1.save(p4);
    console.log('p4 ->', addP4);
  
    const id3 = await test1.getById(3);
    console.log('Con Id 3 ->', id3);
  
    const deleteId1 = await test1.deleteById(1);
    console.log('Delete Id 1 ->', deleteId1);
    const without1 = await test1.getAll();
    console.log('Sin Id 1 ->', without1);
  
    await test1.deleteAll();
  
    const show2 = await test1.getAll();
    console.log('Muestra Final ->', show2);  
  }
  catch (err) {
    console.log('Error al ejecutar Test ->', err);
  }
}

test();
