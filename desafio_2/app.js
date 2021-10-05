//---------------------------------------------------------------------- Import

const fs = require('fs');

//---------------------------------------------------------------------- Class Container

class Container {
  constructor(name) {
    this.name = name;
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.name, 'utf-8');
      return JSON.parse(data);
    }
    catch (err) {
      return [];
    }
  }

  async save(object) {
    const data = await this.getAll();
    if (data.length) {
      const product = await { ...object, id: data[data.length-1].id+1 };
      data.push(product);
    } else {
      const product = await { ...object, id: 1 };
      data.push(product);
    }
    try {
      await fs.promises.writeFile(this.name, JSON.stringify(data));
      return `Se guardo producto bajo el id ${data[data.length-1].id}`;
    }
    catch (err) {
      console.log('ERROR ->', err);
    }
  }

  async getById(productId) {
    try {
      const data = await this.getAll();
      const product = data.find(e => e.id == productId);
      return product;
    }
    catch (err) {
      console.log('ERROR ->', err);
    }
  }

  async deleteById(productId) {
    try {
      const data = await this.getAll();
      const productIndex = data.findIndex(e => e.id == productId);
      data.splice(productIndex, 1);
      await fs.promises.writeFile(this.name, JSON.stringify(data));
      return `Se eliminó correctamente el archivo con Id ${productId}`;
    }
    catch (err) {
      console.log('ERROR ->', err);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.name, '[]');
    }
    catch (err) {
      console.log('Error', err);
    }
  }

}

module.exports = Container;
