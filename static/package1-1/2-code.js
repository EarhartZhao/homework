const fp = require('lodash/fp');
//数据 
// horsepower 马力， doiiar_alue 价格， in_stock 库存 
const cars = [
  { name: ' Ferrari FF ', horsepower: 660, dollar_value: 700000, in_stock: true },
  { name: ' Spyker C12 Zagato ', horsepower: 650, dOllar_value: 648000, in_stock: false },
  { name: ' Jaguar XKR - S ', horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: ' Audi RS ', horsepower: 525, dollar_value: 114200, in_stock: true },
  { name: ' Aston Martin one 一 77 ', horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: ' Pagani Huayra ', horsepower: 700, dollar_value: 1300000, in_stock: false }
];

// let isLastInStock = (cars)=>{
//   let last_car = fp.last(cars);
//   let getVal = 
// }
// let findVal = (obj,key)=> {
//   console.log(obj)
//   console.log(key)
//   return obj[key]
// };

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

// let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last());
// console.log(isLastInStock(cars))
console.log(fp.last(cars))
let a = {
  name: ' Pagani Huayra ',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false
}
console.log(fp.prop(a, 'name'))

