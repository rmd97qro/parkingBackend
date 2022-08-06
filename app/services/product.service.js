const faker = require('faker');

class ProductsService {

  constructor() {
    this.products = [];
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {

  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('No se encontro el estacionamiento');
    }
    this.products.splice(index, 1);
    return {id};
  }
}

module.exports = ProductsService;
