//------------------------------ task 1 ---------------------------------

let body = document.getElementById('body');
let text = document.getElementById('text');
let textarea = document.getElementById('textarea');

function reset(e) {
    if ((e.code === 'KeyE' || e.code === 'KeyS') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
    }
}
document.addEventListener('keydown', (e) => {
    reset(e);
    if (e.ctrlKey && e.code == 'KeyE') {
        textarea.style.display = 'block';
        text.style.display = 'none';
        textarea.value = text.textContent;
    } else if (e.ctrlKey && e.code == 'KeyS') {
        textarea.style.display = 'none';
        text.style.display = 'block';
        text.textContent = textarea.value;
    }
    console.log(e.code);

});

//------------------------------ task 2.beta ---------------------------------
/*
let name = document.getElementById('th1');
let surname = document.getElementById('th2');
let flag = true;

let table = document.getElementById('table');

let rows = table.rows;
let numHead = 0;
let newTable = Array.from(rows).slice(1);
let n = 1;
name.addEventListener('click', () => {
    numHead = 0;
    n++;
    let nnewTable = newTable.sort((a, b) => {
        if (a.cells[numHead].innerHTML > b.cells[numHead].innerHTML) {
            if (n % 2 === 0) {
                return -1;
            }
            return 1;
        } else {
            if (n % 2 === 0) {
                return 1;
            }
            return -1;
        };
    });
    table.tBodies[0].append(...nnewTable);
    console.log(n);

});

surname.addEventListener('click', () => {
    numHead = 1;
    let nnewTable = newTable.sort((a, b) => {
        if (a.cells[numHead].innerHTML > b.cells[numHead].innerHTML) {
            return 1;
        } else {
            return -1;
        };
    });
    table.tBodies[0].append(...nnewTable);

});

let nnewTable = newTable.sort((a, b) => {
    if (a.cells[numHead].innerHTML > b.cells[numHead].innerHTML) {
        return 1;
    } else {
        return -1;
    };
});
table.tBodies[0].append(...nnewTable);
*/
//------------------------------ task 3 ---------------------------------
/*
let $block = document.getElementById('block');
let $btn = document.getElementById('btn');

function move(e) {
    $block.style.width = e.x + 'px';
    $block.style.height = e.y + 'px';
}
function click() {
    document.removeEventListener('mousemove', move);
}

$btn.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', click);
});
*/
//------------------------------ task 2 ---------------------------------
let n = 0;

function Sort(n) {
    let table = document.getElementById('table');
    let rows = table.rows;
    let direction = 'straight'; //reverse
    let firstItem;
    let secondItem;
    let startSort = true;
    let sort;
    let counter = 0;
    let i = 0;

    while (startSort) {
        startSort = false;


        for (i = 1; i < rows.length - 1; i++) {
            sort = false;

            firstItem = rows[i].getElementsByTagName('td')[n];
            secondItem = rows[i + 1].getElementsByTagName('td')[n];
            console.log(firstItem, secondItem);

            if (direction == 'straight' && n === 1) {
                if (Number(firstItem.innerHTML) > Number(secondItem.innerHTML)) {
                    sort = true;
                    break;
                };
            } else if (direction == 'straight') {
                if (firstItem.innerHTML.toLowerCase() > secondItem.innerHTML.toLowerCase()) {
                    sort = true;
                    break;
                };
            } else if (direction == 'reverse' && n === 1) {
                if (Number(firstItem.innerHTML) < Number(secondItem.innerHTML)) {
                    sort = true;
                    break;
                };
            } else if (direction == 'reverse') {
                if (firstItem.innerHTML.toLowerCase() < secondItem.innerHTML.toLowerCase()) {
                    sort = true;
                    break;
                };
            };
        };
        if (sort) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            startSort = true;
            counter++;
        } else {
            if (counter == 0 && direction == 'straight') {
                direction = 'reverse';
                startSort = true;
            }
        }
    }
};