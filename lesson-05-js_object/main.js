
// let menu = {
//     width: 2500,
//     height: 800,
//     title: "My menu"
// };


// function multiplyNumeric(obj) {

//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] = obj[key] * 2
//         }
//     }

// }

// function getMultiplyNumeric(obj) {
//     let newMenu = Object.assign({}, obj);

//     for (let key in newMenu) {
//         if (typeof newMenu[key] === 'number') {
//             newMenu[key] = newMenu[key] * 2
//         }
//     }
//     return newMenu;
// }

// let something = getMultiplyNumeric(menu);
// console.log(something);
// alert(something);


// let tesla = {
//     manufacturer: 'tesla',
//     model: 's',
//     year: 2018,
//     'average speed': 100,
// }

// function show(auto) {
//     console.log(auto);
// }

// function time(num, automobile) {
//     let time = num / automobile['average speed'];
//     if (time >= 4) {
//         time = time + Math.floor(time / 4);
//     }
//     return Math.round(time);
// }



// let fraction1 = {
//     numerator: 5,
//     denominator: 10,
// }

// let fraction2 = {
//     numerator: 4,
//     denominator: 12,
// }

// function addition(a, b) {
//     let numerator = a.numerator + b.numerator;
//     let denominator = a.denominator + b.denominator;
//     let fraction3 = {
//         numerator,
//         denominator,
//     }
//     return fraction3;
// }

// function multiplication(a, b) {
//     let numerator = a.numerator * b.numerator;
//     let denominator = a.denominator * b.denominator;
//     let fraction3 = {
//         numerator,
//         denominator,
//     }
//     return fraction3;
// }

// function subtraction(a, b) {
//     return ((a.numerator / a.denominator) - (b.numerator / b.denominator)).toFixed(1);
// }

// function division(a, b) {
//     return ((a.numerator / a.denominator) / (b.numerator / b.denominator)).toFixed(1);
// }


// function getFibonacci(n) {

//     if (n == 1 || n == 2) {
//         return 1;
//     }

//     return getFibonacci(n - 1) + getFibonacci(n - 2);
// }


// const fib = n => {
//     let prev = 0, next = 1;
//     for (let i = 0; i < n; i++) {
//         let temp = next;
//         next = prev + next;
//         prev = temp;
//     }
//     return prev;
// }

// task 3

let time = {
    hours: 01,
    minutes: 02,
    seconds: 45,
}

function watch(obj) {
    console.log(obj);
}

function displayTime() {
    console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`);
}

function changeSeconds(s) {
    if ((time.seconds + s) >= 60) {
        let newMinutes = Math.floor((time.seconds + s) / 60);
        time.seconds = (time.seconds + s) % 60;
        if ((time.minutes + newMinutes) >= 60) {
            let newHours = Math.floor((time.minutes + newMinutes) / 60);
            time.minutes = (time.minutes + newMinutes) % 60;
            if ((time.hours + newHours) >= 24) {
                time.hours = (time.hours + newHours) % 24;
            }
            else {
                time.hours = time.hours + newHours;
            }
        }
        else {
            time.minutes = time.minutes + newMinutes;
        }
    }
    else {
        time.seconds = time.seconds + s;
    }
    console.log(time);
}

function changeMinutes(m) {
    if ((time.minutes + m) >= 60) {
        let newHours = Math.floor((time.minutes + m) / 60);
        time.minutes = (time.minutes + m) % 60;
        // time.hours = time.hours + newHours;
        if ((time.hours + newHours) >= 24) {
            time.hours = (time.hours + newHours) % 24;
        }
        else {
            time.hours = time.hours + newHours;
        }
    }
    else {
        time.minutes += m;
    }
    console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`)
}

function changeHours(h) {
    if ((time.hours + h) >= 24) {
        time.hours = (time.hours + h) % 24;
    }
    else {
        time.hours += h;
    }
    console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`)
}