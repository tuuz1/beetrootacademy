//-------------------------------- task 1-----------------------------------
let body = document.getElementsByTagName('body');
var playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];


function createList() {
    let list = document.createElement('ol');
    body[0].prepend(list);
    for (let i = 0; i < playList.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `author: ${playList[i].author}, song: ${playList[i].song}`;
        list.append(li);
    }
}

//-------------------------------- task 2 -----------------------------------

let btn = document.getElementById('btn');
let closeBtn = document.getElementById('close-btn');
let modal = document.getElementById('modal');

btn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

//-------------------------------- task 3 -----------------------------------

let lightBtn = document.getElementById('light-btn');
let light = document.getElementsByClassName('light');
let i = 0;
let length = light.length;
lightBtn.addEventListener('click', () => {
    light[i].classList.add('on');
    if (i >= 1 || i == length) {
        light[i - 1].classList.remove('on');
    };
    if (i == 0) {
        light[length - 1].classList.remove('on');
    };
    i++;
    if (i >= length) {
        i = 0;
    };
});


