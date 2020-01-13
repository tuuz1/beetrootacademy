
const $input = $('#input-text');
const $list = $('.list');
const $button = $('#button');
const $form = $('form');

let downloadString = localStorage.getItem('toDoList');
let array = JSON.parse(downloadString) || [];


if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
        renderItem(array[i], i);
    };
};



$form.on('submit', function (e) {
    e.preventDefault();
    let value = $input.val();

    if (value == "") {
        alert('input empty')
    } else {
        let item = { val: value, check: false };
        array.push(item);
        let sendString = JSON.stringify(array);
        localStorage.setItem('toDoList', sendString);
        $input.val('');
        renderList(array);
    }

});

function renderItem(item, number) {
    let checkedAttribute = item.check ? 'checked' : '';
    $list.append(`
                    <li class="item" data-number="${number}">
                        <div class="checkbox-wrapper">
                            <label class="new-check">
                                <input type="checkbox" ${checkedAttribute} class="checkbox" data-number="${number}">
                                <div class="bg"></div>                                
                            </label>                            
                        </div>
                        <span class="item-text">${item.val}</span>
                        <input class="input-edit" type='text' value="${item.val}">
                        <button class="btn-edit"><img src="./edit.svg"></button>
                        <button class="btn-delete"><img src="./trash.svg"></button>
                    </li>
                `)
};

function renderList() {
    $list.empty();
    for (let i = 0; i < array.length; i++) {
        renderItem(array[i], i)
    }
};

function changeLS() {
    sendString = JSON.stringify(array);
    localStorage.setItem('toDoList', sendString);
}

$list.on('change', '.checkbox', function (e) {
    let numCheckbox = $(e.currentTarget).data('number');
    let state = e.currentTarget.checked;
    array[numCheckbox].check = state;
    changeLS();
});

$list.on('click', '.btn-delete', function (e) {
    let numberItem = $(e.currentTarget.parentNode).data('number');
    array.splice(numberItem);
    changeLS();
    renderList();
});

$list.on('click', '.btn-edit', function (e) {
    let numberItem = $(e.currentTarget.parentNode).data('number');
    let $editInput = $('.input-edit');
    let $itemText = $('.item-text');
    $editInput.eq(numberItem).toggleClass('active');
    $itemText.eq(numberItem).toggleClass('not-active');
    let editInputValue = $editInput.eq(numberItem).val();
    $itemText.eq(numberItem).text(editInputValue);
    array[numberItem].val = editInputValue;

    changeLS();

});
