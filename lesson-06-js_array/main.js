// let listBy = [
//     { name: 'vodka', qty: 4, by: false },
//     { name: 'beer', qty: 34, by: true },
//     { name: 'tequila', qty: 7, by: false },
//     { name: 'jagermeister', qty: 10, by: true },
//     { name: 'lime', qty: 14, by: false },
// ]

// function watch() {
//     console.log(listBy.sort((a, b) => a.by - b.by));
// }

// function addItem(obj) {
//     let flag = true;
//     listBy.forEach((item) => {
//         if (obj.name == item.name) {
//             item.qty += obj.qty;
//             item.by = obj.by;
//             flag = false;
//         }
//     });
//     if (flag) {
//         listBy.push(obj);
//     }
// }

// function by(n) {
//     listBy.forEach((item) => {
//         if (n === item.name) {
//             item.by = true;
//         }
//     })
// }


// // task 2 

// let check = [
//     { name: 'beer', qty: 4, price: 20 },
//     { name: 'meat', qty: 6, price: 70 },
//     { name: 'cheese', qty: 5, price: 60 },
//     { name: 'water', qty: 8, price: 10 },
// ]
// // "роздрукувати" чек
// function print() {
//     check.forEach((item) =>
//         console.log(`${item.name}, quantity: ${item.qty}, price: ${item.price}`)
//     )
// }
// // загальна сума чеку
// function getValue() {
//     let value = 0;
//     check.forEach((item) =>
//         value += item.qty * item.price,
//     )
//     console.log(value);
// }
// // найдорожча покупка у чеку
// function getTopPrice() {
//     check.sort((a, b) => b.price - a.price);
//     console.log(check[0]);
// }
// //середня покупка у чеку
// function getAverageCost() {
//     let allPrice = 0;
//     let averageCost = 0;
//     check.forEach((item) => {
//         allPrice += item.price;
//     })
//     averageCost = allPrice / check.length;
//     console.log(averageCost);
// }

// function getAverageCost2() {
//     let value = 0;
//     let allValue = 0;
//     let averageCost = 0;
//     for (let i = 0; i < check.length; i++) {
//         value = check[i].price * check[i].qty;
//         allValue += value;
//     }
//     averageCost = allValue / check.length;
//     console.log(averageCost);
// }


