// let age = Number(prompt("Your age:"));

// if (age >= 0 && age <= 12) {
//     alert('you are children');
// }
// else if (age > 12 && age <= 18) {
//     alert('you are teenager');
// }
// else if (age > 18 && age <= 60) {
//     alert('you are adult')
// }
// else if (age > 60) {
//     alert('you are old');
// }
// else {
//     alert('your enter incorrect age')
// }

// task 2

// let number = Number(prompt('please enter number with 0 to 9'));
// if (number === 1) {
//     alert('!');
// }
// else if (number === 2) {
//     alert('@');
// }
// else if (number === 3) {
//     alert('#')
// }
// else if (number === 4) {
//     alert($);
// }
// else if (number === 5) {
//     alert('%');
// }
// else if (number === 6) {
//     alert('^');
// }
// else if (number === 7) {
//     alert('&')
// }
// else if (number === 8) {
//     alert('*')
// }
// else if (number === 9) {
//     alert('(');
// }
// else if (number === 0) {
//     alert(')');
// }
// else {
//     alert('incorrect symbol')
// }

// task 3 

// let number = Number(prompt('Enter number:'));
// let a = number % 10;
// let b = Math.floor(number / 10) % 10;
// let c = Math.floor(number / 100) % 10;
// if (a === b || a === c || b === c) {
//     alert('number true');
// }
// else {
//     alert("number false");
// }

// task 4 

// let year = Number(prompt('Enter year'));
// if (year % 400 === 0 || year % 4 === 0 && year !== 100) {
//     alert('leap year');
// }
// else {
//     alert('not leap year');
// }

// task 5 

// let number = Number(prompt('Enter number'));
// let reverse = 0;
// let x = number;

// while (number > 0) {
//     reverse = reverse * 10 + number % 10;
//     number = Math.floor(number / 10);
// }

// if (x === reverse) {
//     alert('number is palindrome');
// }
// else {
//     alert('number is not palindrome');
// }

// task 6 

// let usd = Number(prompt('Dollars:'));
// let valuta = prompt('Valuta: UAH,EUR,GBP');

// if (valuta === 'UAH') {
//     alert('result ' + usd * 24);
// }
// else if (valuta === 'EUR') {
//     alert('result ' + usd * .9);
// }
// else if (valuta === 'GBP') {
//     alert('result ' + usd * .8);
// }

// task 7 

// let sum = Number(prompt('Your purchase amount'));
// let price;
// let discount;
// if (sum >= 200 && sum < 300) {
//     discount = .03;
// }
// else if (sum >= 300 && sum < 500) {
//     discount = .05;
// }
// else if (sum > 700) {
//     discount = .07;
// }
// else {
//     discount = 0;
// }
// price = sum - sum * discount;
// alert('Price for you: ' + Math.round(price));

// task 8 

// let length = Number(prompt("Length"));
// let perimeter = Number(prompt('Perimeter'));
// let d = Math.floor(length / Math.PI);
// let a = Math.floor(perimeter / 4);
// let result;

// result = a === d ? true : false;

// alert(result);

//task 10 

let x = 0;
let day;
let month;
let year;
let leapYear = false;

while (x === 0) {
    year = Number(prompt('Enter year:'));
    if (year < 1) {
        alert('Wrong year, enter again.');
    }
    else {
        x = 1;
    }
}

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    leapYear = true;
}

while (x === 1) {
    month = Number(prompt('Enter month:'));
    if (month < 1 || month > 12) {
        alert('Wrong month, enter again.');
    }
    else {
        x = 2;
    }
}

while (x === 2) {
    day = Number(prompt('Enter day:'));

    if (leapYear && month === 2 && day > 29) {
        alert('Wrong day, enter again.');
    }
    else if (!leapYear && month === 2 && day > 28) {
        alert('Wrong day, enter again.');
    }
    else if (month === 4 && day > 30) {
        alert('Wrong day, enter again.');
    }
    else if (month === 6 && day > 30) {
        alert('Wrong day, enter again.');
    }
    else if (month === 9 && day > 30) {
        alert('Wrong day, enter again.');
    }
    else if (month === 11 && day > 30) {
        alert('Wrong day, enter again.');
    }
    else if (day < 1 || day > 31) {
        alert('Wrong day, enter again.');
    }
    else {
        x = 3;
    }

}
if (leapYear && month === 2 && day === 28) {
    day++;
}
else if (month === 2 && day === 28) {
    day = 1;
    month++;
}
else if (leapYear && month === 2 && day === 29) {
    day = 1;
    month++;
}
else if (month === 4 || month === 6 || month === 9 || month === 11 && day === 30) {
    day = 1;
    month++;
}
else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 && day === 31) {
    day = 1;
    month++;
}
else if (day === 31 && month === 12) {
    day = 1;
    month = 1;
    year++;
}
else {
    day++;
}

alert(day + '.' + month + '.' + year);

