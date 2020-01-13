

$('.btn').on('click', 'button', function (event) {
    console.log(this.value);
    $('.show').append(this.value);
    console.log(event.toElement.textContent);
    let a;
    let b;

    if (event.toElement.textContent == '=') {
        a = $('.show')[0].textContent;
        b = eval(a);
        console.log(b);
        $('.show')[0].textContent = '';
        $('.show')[0].textContent = b;
    }
    if (event.toElement.textContent == 'AC') {
        $('.show')[0].textContent = '';
    }

});





