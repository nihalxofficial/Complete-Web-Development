// const product = {
//   name: 'iPhone',
//   price: 799,
//   description: 'A smartphone by Apple'
// };

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;
const price = 5555;
// const product = { name: 'iPhone', price: 799, brand: 'Apple' };
const {name, price: phonePrice, camera = '12MP'} = { name: 'iPhone', price: 799, brand: 'Apple', camera: '48MP' };
// console.log(camera);

const [first, second]  = [10, 20, 30, 50];
console.log(first, second);

const [height, weight] = numbers