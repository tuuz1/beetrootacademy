let classList = [
    { classroom: 'f432', place: 12, faculty: 'frontend' },
    { classroom: 'f431', place: 18, faculty: 'frontend' },
    { classroom: 'f435', place: 19, faculty: 'frontend' },
    { classroom: 'd123', place: 8, faculty: 'design' },
    { classroom: 'd124', place: 16, faculty: 'design' },
    { classroom: 'd125', place: 10, faculty: 'design' },
    { classroom: 'j321', place: 11, faculty: 'javaScript' },
    { classroom: 'j334', place: 7, faculty: 'javaScript' },
    { classroom: 'j356', place: 6, faculty: 'javaScript' },
    { classroom: 'p234', place: 14, faculty: 'python' },
    { classroom: 'p285', place: 15, faculty: 'python' },
    { classroom: 'p269', place: 20, faculty: 'python' },
]
//показати всі аудиторії
function watchClassroom() {
    classList.forEach((item) => {
        console.log(item);
    });
}
// показати аудиторіії даного факультету
function getClassFac(text) {
    let newList = classList.filter((item) => item.faculty === text);
    newList.forEach((item) => {
        console.log(`classroom: ${item.classroom}, places: ${item.place}, faculty: ${item.faculty}.`);
    });
}
// показати аудиторії які задовільняють даний об'єкт
let group = { name: 'juniors', qty: 10, faculty: 'design' };
function getClassObj(obj) {
    let newClassList = [];
    classList.forEach((item) => {
        if (item.faculty === obj.faculty && obj.qty <= item.place) {
            newClassList.push(item);
        }
    });
    console.log(newClassList);
}

//сортування аудиторій по кількості мість
function sortForPlaces() {
    classList.sort((a, b) => b.place - a.place);
    return classList;
}

// сортування аудиторій по алфавіту
function sortForAlphabet() {
    classList.sort((a, b) => {
        if (a.classroom > b.classroom) {
            return 1;
        } else {
            return -1;
        }
    });
    return classList;
}