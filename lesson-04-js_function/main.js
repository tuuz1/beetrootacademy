// function one(x, y) {
//     if (x > y) {
//         return 1;
//     } else if (x < y) {
//         return -1;
//     }
//     return 0;
// }


// function factorial(x) {
//     for (let i = x - 1; i > 1; i--) {
//         x = x * i;
//     }
//     return x;
// }


// function createString(x, y, z) {
//     let number = +(String(x) + String(y) + String(z));
//     return number;
// }


// function calcArea(x, y) {
//     let area = 0;
//     if (y == undefined) {
//         area = Math.pow(x, 2);
//     } else {
//         area = x * y;
//     }
//     return area;
// }


// function perfectNum(x) {
//     let result = 0;
//     for (let i = x - 1; i >= 1; i--) {
//         if (x % i === 0) {
//             result += i;
//         }
//     }
//     if (x == result) {
//         return true;
//     } else {
//         return false;
//     }
// }


// function perfectNumbers(x, y) {
//     let number = x;
//     let perfect = '';
//     for (let i = x; i <= y; i++) {
//         number = i;
//         let result = 0;
//         for (let j = number - 1; j >= 1; j--) {
//             if (number % j === 0) {
//                 result += j;
//             }
//         }
//         if (number === result) {
//             perfect = perfect + String(result + ' ');
//         }
//     }
//     return (perfect);
// }

let times = 0;

function showTime(hh, mm, ss) {
    hh = prompt('hour'); //console.log(hh);
    mm = prompt('minutes'); //console.log(mm);
    ss = prompt('seconds'); //console.log(ss);
    let time;

    if (mm === '' && ss === '') {
        return time = `Time is: ${hh}:00:00`;
    } else if (mm === '') {
        return time = `Time is: ${hh}:00:${ss}`;
    } else if (ss === '') {
        return time = `Time is: ${hh}:${mm}:00`;
    } else { return time = `Time is: ${hh}:${mm}:${ss}` };

}
console.log(showTime());
console.log(times);