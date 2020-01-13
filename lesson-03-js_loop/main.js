//task 3

// var n = 12;
// var divisor = [];
// if (n % 2 == 0) {
//     divisor.push(2);
//     n = Math.round(n / 2);
//     var max = n / 2;
//     for (var i = 2; i <= max; i++) {
//         if (n % i == 0) {
//             divisor.push(2 * i);
//         };
//     };
//     divisor.push(2 * n);
// };
// alert(divisor);

// task 3

// let a = Number(prompt('number-1'));
// let b = Number(prompt('number-2'));
// while (a != b) {
//     if (a > b) {
//         a = a - b;
//     } else {
//         b = b - a;
//     }
// }
// alert(a);

// task 3 

// let y = Number(prompt('get a'));
// let x = Number(prompt('get b'));
// while (y !== 0) {
//     y = x % (x = y)
// }
// alert(x);








// task 2 

// let number = Number(prompt('number: '));
// let result = "";
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         result = result + " " + String(i);
//     } else { }
// }
// alert(result);

task 3

let number1 = Number(prompt('number-1: '));
let number2 = Number(prompt('number-2:'));
let number;
let result;
if (number1 > number2) {
    number = number1;
} else if (number2 > number1) {
    number = number2;
} else {
    number = number2;
}
for (let i = 1; i <= number; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        result = i;
    } else { }
}
alert(result);

// ---------------------------------------

let a = Number(prompt('number-1:'));
let b = Number(prompt('number-2:'));
let divider;

divider = a > b ? b : a;




// task 4 

// let number = prompt("get number");
// let x = 0;
// for (let i = 0; i < number.length; i++) {
//     x++;
// } alert(x + ' ' + number.length);

// task 5 

// let number = 0;
// let positive = 0;
// let negative = 0;
// let zero = 0;
// for (let i = 0; i < 10; i++) {
//     number = Number(prompt("number: "));
//     // switch (number) {
//     //     case number > 0: positive++; break;
//     //     case number < 0: negative++; break;
//     //     case number == 0: zero++;
//     // }
//     if (number > 0) {
//         positive++;
//     } else if (number < 0) {
//         negative++;
//     }
//     else {
//         zero++
//     }
// }
// alert(positive + " " + negative + " " + zero);

// task 6 

// let a = Number(prompt('number-1:'));
// let b = Number(prompt('number-2'));
// let

// task 7 

// let number = prompt('get number');
// let lengthNumber = number.length;
// number = Number(number);
// let step = Number(prompt('get step displacement number'));
// let reverseStep = Math.pow(10, lengthNumber - step);
// let numberDisplacement = Math.floor(number / reverseStep);
// let finishNumber = String(Math.abs(number - numberDisplacement * reverseStep)) + numberDisplacement;
// alert(finishNumber);

// task 10 

// let n = 50,
//     half = 25,
//     flag = true,
//     change = '';

// alert('your number 50');
// while (flag) {
//     change = prompt('enter change: ');
//     if (change == '==') {
//         flag = false;
//         alert('yes');
//     }
//     else if (change == '>') {
//         n = Math.floor(n + half);
//         alert(n);
//     }
//     else if (change == '<') {
//         n = Math.floor(n - half);
//         alert(n);
//     }
//     half = half / 2 + 1;
// }