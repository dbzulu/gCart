// import { ok } from "assert";

export default {
  getPromise(data) {
    return new Promise(resolve => resolve(data));
  },
  getTasks() {
    return this.getPromise([{
        name: 'Test',
        price: '3.50',
        onSale: false
      },{
        name: 'Test Duce',
        price: '2.50',
        onSale: true
      },{
        name: 'Test Tres',
        price: '1.50',
        onSale: false
      }]);
  },
  putPromise(data) {
    return new Promise(resolve => resolve(data));
  },
  putItems(item) {
    console.log('item given was ', item)
    return this.getPromise({item});
  }
};